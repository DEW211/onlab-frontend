import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle'
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon:{
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1
    }
}));


function Header(){
    const classes = useStyles();
    return (
    <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" className={classes.title} noWrap>
            My Albums
          </Typography>
          <IconButton
            color="inherit"
            >
                <AddIcon/>
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

export default Header;