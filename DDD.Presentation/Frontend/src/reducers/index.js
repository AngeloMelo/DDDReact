import {combineReducers} from 'redux';
import cities from './cityReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    cities,
	authors,
	ajaxCallsInProgress
});

export default rootReducer;