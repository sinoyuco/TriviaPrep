import { RECEIVE_QUESTIONS } from '../actions/question_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return Object.assign({}, state, action.questions.data);
        default:
            return state;
    }
}

export default questionsReducer;