import {ARTICLEINFO, ARTICLECLEAR} from ".././constants/article-constants";
import {initialState} from ".././constants/initialState"

export default function articlesReducer(state=initialState.articles,action)
{
    switch(action.type)
    {
     case ARTICLEINFO:
     return {
        ...state,
        articles: action.articles
      };
      case ARTICLECLEAR:
      return {
        ...state,
        state : initialState.articles
      };
     default:
     return state
    }  
}
