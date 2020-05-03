import {DELETE_PICTURE} from './ActionTypes';

export function deletePictureAction(picture = []){
    return {
        type: DELETE_PICTURE,
        picture
    }
}