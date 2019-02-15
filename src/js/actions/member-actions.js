import {MEMBERTRANSFER} from ".././constants/member-constants"

export const LogMember = function LogMember(member)
{
 return   dispatch => dispatch({type:MEMBERTRANSFER,member}); 
}