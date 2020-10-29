const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    incorrect: {
        type: Array,
        required: true
    },
    correct: {
        type: String,
        required: true
    }
})

module.exports = Question = mongoose.model('Question', QuestionSchema);