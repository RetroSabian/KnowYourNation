import {MEMBERTRANSFER, MEMBERCLEAR} from".././constants/member-constants"
import {initialState} from ".././constants/initialState"


export default function membersReducer(state=initialState.members,action)
{
    switch(action.type)
    {
     case MEMBERTRANSFER:
     return {
        ...state,
        members: action.member
      };
      case MEMBERCLEAR:
      return {
        ...state,
        state : initialState.members
      };
     default:
     return state
    }  
    
}