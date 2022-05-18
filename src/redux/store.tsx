import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { localStorageMiddleware } from './middleware';
import rootReducer from './reducers/root_reducers';
import rootSaga from './saga_actions/root_saga';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return composeWithDevTools(applyMiddleware(localStorageMiddleware, sagaMiddleware));
    } else {
        return composeWithDevTools(applyMiddleware(localStorageMiddleware, sagaMiddleware, createLogger()));
    }
};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, getMiddleware());

sagaMiddleware.run(rootSaga);


export default store;

