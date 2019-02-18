import {ADMINUSER,MEMBERUSER, CLEARUSER} from".././constants/user-constants"
import {initialState} from ".././constants/initialState"

export default function usersReducer(state=initialState.users,action)
{
    switch(action.type)
    {
     case MEMBERUSER:
     return {
        ...state,
        users: action.user
      };
    case ADMINUSER:
     return {
        ...state,
        users: action.user
      };
      case CLEARUSER:
      return {
        ...state,
        state : initialState.users
      };
     default:
     return state
    } 
}
