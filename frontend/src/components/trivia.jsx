import React from 'react';
import Question from './question';

class Trivia extends React.Component {

    constructor(props){
        super(props);
        this.state={score: 0, question: 0}
        this.quit = this.quit.bind(this);
        this.questionHandler = this.questionHandler.bind(this);
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    questionHandler(c){
        if(c==='correct'){
            this.setState({question: this.state.question + 1, score: this.state.score + 1})
        }else{
            this.setState({ question: this.state.question + 1 })
        }
        
    }

    quit(e){
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {

        if(this.state.question===10){
            this.props.history.push({
                pathname: '/results',
                state: {score: this.state.score}
            });
        }
        debugger;
        const questions = this.props.questions.map((q) => <Question handler={this.questionHandler} id={q.id} q={q}/>) 
        return (
            <div className="main-trivia">
                <div onClick={this.quit} className="trivia-quit">
                    <i class="fas fa-arrow-left"></i>
                    <h2>Quit</h2>
                </div>
                <div className="trivia-question-container">
                    <h2 className="trivia-question-number">Q{this.state.question+1}:</h2>
                    {questions[this.state.question]}
                </div>
            </div>
        );
    }
}

export default Trivia;