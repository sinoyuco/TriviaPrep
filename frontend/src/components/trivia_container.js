import { connect } from 'react-redux';
import {fetchQuestions} from '../actions/question_actions';
import Trivia from './trivia';

const mSTP= (state) => {
    return {
        questions: Object.values(state.questions)
    }
};

const mDTP = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions()),
    }
}


export default connect(mSTP,mDTP)(Trivia);