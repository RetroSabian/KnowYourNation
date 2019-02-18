import {BOOKINFO, BOOKCLEAR} from ".././constants/book-constants";

export const logBook = function logBook(book)
{
 return   dispatch => dispatch({type:BOOKINFO,book}); 
}
export const clearBook = function clearBook(book)
{
 return   dispatch => dispatch({type:BOOKCLEAR,book}); 
}