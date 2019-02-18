import {BOOKINFO, BOOKCLEAR} from ".././constants/book-constants";
import {initialState} from ".././constants/initialState"

export default function booksReducer(state=initialState.books,action)
{
    switch(action.type)
    {
     case BOOKINFO:
     return {
        ...state,
        books: action.books
      };
      case BOOKCLEAR:
      return {
        ...state,
        state : initialState.books
      };
     default:
     return state
    }  
}
