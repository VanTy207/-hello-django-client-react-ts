import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { localStorageMiddleware } from './middleware';
import rootSaga from './root_saga';
import rootReducers from './root_reducers';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return composeWithDevTools(applyMiddleware(localStorageMiddleware, sagaMiddleware));
    } else {
        return composeWithDevTools(applyMiddleware(localStorageMiddleware, sagaMiddleware, createLogger()));
    }
};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, getMiddleware());

sagaMiddleware.run(rootSaga);


export default store;

