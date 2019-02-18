import {ADMINUSER, MEMBERUSER, CLEARUSER} from ".././constants/user-constants";

export const adminLogin = function adminLogin(user)
{
 return   dispatch => dispatch({type:ADMINUSER,user}); 
}
export const memberLogin = function memberLogin(user)
{
 return   dispatch => dispatch({type:MEMBERUSER,user}); 
}
export const clearUser = function clearUser(user)
{
 return   dispatch => dispatch({type:CLEARUSER,user}); 
}
