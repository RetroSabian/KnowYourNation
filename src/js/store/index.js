import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import { forbiddenWordsMiddleware} from "../middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const history = createHistory()

// const initialState = {}
const enhancers = []
// const middleware = [
    // thunk,
    // routerMiddleware(history)
// ]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

// const composedEnhancers = compose(
//     applyMiddleware(...middleware),
//     ...enhancers
// )

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware)),
    // initialState,
    // composedEnhancers
);

export default store;
