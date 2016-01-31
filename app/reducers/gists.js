import * as ActionType from '../actions/gists';

function questionsReducer(state = [], action) {
    switch (action.type) {
        case ActionType.LOADED_GISTS:
            return action.response;
            break;
        default:
            return state;
    }
}

export default questionsReducer;
