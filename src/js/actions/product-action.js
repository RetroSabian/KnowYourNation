import {PRODUCTINFO, PRODUCTCLEAR} from ".././constants/product-constants";

export const logProduct = function logProduct(product)
{
 return   dispatch => dispatch({type:PRODUCTINFO,product}); 
}   
export const clearProduct = function clearProduct(product)
{
 return   dispatch => dispatch({type:PRODUCTCLEAR,product}); 
}
