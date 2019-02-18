import {COMICINFO, COMICCLEAR} from ".././constants/comic-constants";

export const logComic = function logComic(comic)
{
 return   dispatch => dispatch({type:COMICINFO,comic}); 
}   
export const clearComic = function clearComic(comic)
{
 return   dispatch => dispatch({type:COMICCLEAR,comic}); 
} 