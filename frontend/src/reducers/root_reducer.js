import { combineReducers } from 'redux';
import questions from './questions_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    questions: questions,
    ui: ui
});

export default RootReducer;