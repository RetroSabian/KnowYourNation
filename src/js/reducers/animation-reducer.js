import {ANIMATIONINFO, ANIMATIONCLEAR} from ".././constants/animation-constants";
import {initialState} from ".././constants/initialState"

export default function animationsReducer(state=initialState.animations,action)
{
    switch(action.type)
    {
     case ANIMATIONINFO:
     return {
        ...state,
        animations: action.animation
      };
      case ANIMATIONCLEAR:
      return {
        ...state,
        state : initialState.animations
      };
     default:
     return state
    }  
}
