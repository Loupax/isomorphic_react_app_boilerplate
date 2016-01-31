import { combineReducers } from 'redux';
import gists from '../reducers/gists';

const rootReducer = combineReducers({
    gists
});

export default rootReducer;
