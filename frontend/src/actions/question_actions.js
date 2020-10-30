import * as APIUtil from '../util/questions_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export const fetchQuestions = () => (dispatch) => {
    return APIUtil.getQuestions().then((questions) => {
        dispatch(receiveQuestions(questions))
    }).catch((err) => {
        console.log(err);
    })
};