import {MEMBERTRANSFER, MEMBERCLEAR} from ".././constants/member-constants"

export const LogMember = function LogMember(member)
{
 return   dispatch => dispatch({type:MEMBERTRANSFER,member}); 
}
export const clearMember = function clearMember(member)
{
 return   dispatch => dispatch({type:MEMBERCLEAR,member}); 
}
