import { combineReducers } from 'redux';

import { alert } from './AlertReducer';

const rootReducer = combineReducers({
    alert
});

export default rootReducer;
