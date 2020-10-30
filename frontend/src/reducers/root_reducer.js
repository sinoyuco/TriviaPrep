import { combineReducers } from 'redux';
import questions from './questions_reducer';

const RootReducer = combineReducers({
    questions,
});

export default RootReducer;