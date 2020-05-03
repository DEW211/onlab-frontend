import { EDIT_CHANGE } from '../actions/ActionTypes';
import { DELETE_PICTURE } from '../actions/ActionTypes';
import {
	FETCH_ALBUMS_REQUEST,
	FETCH_ALBUMS_FAILURE,
	FETCH_ALBUMS_SUCCESS,
} from '../actions/ActionTypes';

export const initialState = {
	userName: 'DEW211',
	albums: [
		{
			name: 'Album1',
			thumbnail:
				'https://picturestoragernalbi.blob.core.windows.net/albums/2.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
		},
    ],
    isFetching: false,
    isEditing: false,
    error: '',
	currentAlbum: {
		AlbumName: 'Album2',
		Owner: 'DEW211',
		Pictures: [
			{
				id: 'id1',
				link:
					'https://picturestoragernalbi.blob.core.windows.net/albums/1.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
			},
			{
				id: 'id2',
				link:
					'https://picturestoragernalbi.blob.core.windows.net/albums/2.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
			},
			{
				id: 'id3',
				link:
					'https://picturestoragernalbi.blob.core.windows.net/albums/3.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
			},
			{
				id: 'id4',
				link:
					'https://picturestoragernalbi.blob.core.windows.net/albums/1.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
			},
			{
				id: 'id5',
				link:
					'https://picturestoragernalbi.blob.core.windows.net/albums/2.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
			},
			{
				id: 'id6',
				link:
					'https://picturestoragernalbi.blob.core.windows.net/albums/3.jpg?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-05-09T19:58:41Z&st=2020-05-03T11:58:41Z&spr=https&sig=0aQ2VlJzfH4ZBhCizuD6HrYCuxLT6A6PyaIvhlKnii0%3D',
			},
		],
	},
};

export function editReducer(state = initialState, action) {
	switch (action.type) {
		case EDIT_CHANGE:
			return Object.assign({}, state, {
				isEditing: !state.isEditing,
			});
		case DELETE_PICTURE:
			let newState = Object.assign({}, state);
			newState.currentAlbum.Pictures = newState.currentAlbum.Pictures.filter(
				(value, index, arr) => {
					return value.id !== action.id;
				}
			);
			console.log(newState);
			return newState;
		case FETCH_ALBUMS_REQUEST:
            return Object.assign({}, state, {isFetching: true})
        case FETCH_ALBUMS_SUCCESS:
            return Object.assign({}, state, {albums:action.data})
        case FETCH_ALBUMS_FAILURE:
            return Object.assign({},state, {error:action.error})
		default:
			return state;
	}
}
