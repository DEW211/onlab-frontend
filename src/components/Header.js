import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {fetchAlbums} from '../actions/albumsActions'


const useStyles = makeStyles((theme) => ({
    icon:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1
    }
}));


function Header(props){
    const classes = useStyles();
    return (
    <AppBar position="relative">
        <Toolbar>
          {(props.isEditing)? <IconButton color="inherit"><ArrowBackIcon className={classes.icon}/></IconButton>: <CameraIcon className={classes.icon} />}
          <Typography variant="h6" color="inherit" className={classes.title} noWrap>
    {(props.isEditing) ? props.albumTitle : "My Albums"}
          </Typography>
          <IconButton onClick={() => {props.dispatch(fetchAlbums("DEW211"))}}
            color="inherit"
            >
                <AddIcon />
            </IconButton>
            <IconButton
            color="inherit"
            >
                <AccountCircle/>
            </IconButton>
        </Toolbar>
      </AppBar>
    );
}

const mapStateToProps = (state) => {
	return {
        isEditing: state.isEditing,
        albumTitle: state.currentAlbum.AlbumName
	};
};

export default connect(mapStateToProps, null)(Header);

