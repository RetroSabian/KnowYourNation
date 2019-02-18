import {COMICINFO, COMICCLEAR} from ".././constants/comic-constants";
import {initialState} from ".././constants/initialState"

export default function comicsReducer(state=initialState.comics,action)
{
    switch(action.type)
    {
     case COMICINFO:
     return {
        ...state,
        comics: action.comic
      };
      case COMICCLEAR:
      return {
        ...state,
        state : initialState.comics
      };
     default:
     return state
    }  
}
