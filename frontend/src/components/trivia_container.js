import { connect } from 'react-redux';
import {fetchQuestions} from '../actions/question_actions';
import {openModal, closeModal} from '../actions/modal_actions';
import Trivia from './trivia';

const mSTP = (state) => {
    debugger;
    return {
        questions: Object.values(state.questions)
    }
};

const mDTP = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions()),
        openModal: (type,a) => dispatch(openModal(type, a)),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP,mDTP)(Trivia);