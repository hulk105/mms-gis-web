import { combineReducers } from 'redux';

import { firstTableReducer } from './firstTableReducer';
import { secondTableReducer } from './secondTableReducer';
import { thirdTableReducer } from './thirdTableReducer';
import { showPopUpReducer } from './showPopUpReducer';


const rootReducer = combineReducers( {
	showPopUpReducer,
	firstTableReducer,
	secondTableReducer,
	thirdTableReducer
} );

export default rootReducer;
