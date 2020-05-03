import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { editReducer } from '../reducers/editReducer';

//const loggerMiddleware = createLogger();

export const store = createStore(
	editReducer,
	applyMiddleware(thunkMiddleware)
);
