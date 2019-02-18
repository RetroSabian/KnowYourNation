import { combineReducers } from 'redux';
import membersReducer from "./member-reducer";
import usersReducer from "./user-reducer";
import animationsReducer from "./animation-reducer";
import articlesReducer from "./article-reducer";
import booksReducer from "./book-reducer";
import comicsReducer from "./comic-reducer";
import productsReducer from "./product-reducer";

const rootRedcuter=  combineReducers({
     member: membersReducer,
     user: usersReducer,
     animation: animationsReducer,
     article:  articlesReducer,
     book: booksReducer,
     comic: comicsReducer,
     product: productsReducer
  });
  export default rootRedcuter;
  