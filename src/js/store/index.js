import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from "redux-thunk";

const middleware = [thunk];
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = storeEnhancers(
    applyMiddleware(...middleware)
);

// if (process.env.NODE_ENV === 'development') {
//     const devToolsExtension = window.devToolsExtension

//     if (typeof devToolsExtension === 'function') {
//         enhancers.push(devToolsExtension())
//     }
// }

const store = createStore(
    rootReducer,
    enhancers
);

export default store;
