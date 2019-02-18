import {ARTICLEINFO, ARTICLECLEAR} from ".././constants/article-constants";

export const logArticle = function logArticle(article)
{
 return   dispatch => dispatch({type:ARTICLEINFO,article}); 
}
export const clearArticle = function clearArticle(article)
{
 return   dispatch => dispatch({type:ARTICLECLEAR,article}); 
}
