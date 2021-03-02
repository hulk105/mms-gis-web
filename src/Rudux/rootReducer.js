import { combineReducers } from 'redux';

import { firstTableReducer } from './firstTableReducer';
import { secondTableReducer } from './secondTableReducer';
import { thirdTableReducer } from './thirdTableReducer';
import { showPopUpReducer } from './showPopUpReducer';
import {groupsReducer} from './groups';


const rootReducer = combineReducers( {
	showPopUpReducer,
	firstTableReducer,
	secondTableReducer,
	thirdTableReducer,
	groupsReducer
} );

export default rootReducer;
