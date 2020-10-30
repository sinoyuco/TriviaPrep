const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const Question = require('../../models/Question');

router.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(404).json({ nonefound: 'No questions found' }));
});


router.get('/sample', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(404).json({ notweetsfound: 'No questions found' }));
});

router.post('/', (req, res) => {

    const newquestion = new Question({
        question: req.body.question,
        incorrect: req.body.incorrect,
        correct: req.body.correct
    });

    newquestion.save()
        .then(q => res.json(q))
        .catch(err => console.log(err));

});

router.delete('/:id', (req, res) => {
    Question.findOneAndDelete({ id: req.id })
        .then((question) => res.json(question))
        .catch((err) => res.json(err));
});


module.exports = router;