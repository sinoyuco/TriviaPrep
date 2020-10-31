import React from 'react';

class Question extends React.Component{

    constructor(props){
        super(props);
        this.state = {selected: null, answer: null}
        this.updateChoice = this.updateChoice.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    updateChoice(answer, idx){
        debugger;
        this.setState({ selected: idx, answer: answer });
    }

    submitAnswer(e){
        e.preventDefault()
        if(this.state.answer){
            if(this.props.q.correct === this.state.answer){
                this.props.handler('correct')
            }else{
                this.props.handler('incorrect')
            }
            this.setState({selected: null, answer: null});
        }else{
            alert('You must select an answer before submitting!!')
        }
    }

    render(){
        const {q} = this.props
        debugger;

        let options = q.incorrect.concat([q.correct]).sort();

        const t = Array.from(document.getElementsByClassName('answers-option-button'));
        t.forEach((ele, i) => {
            ele.classList.remove('activeb')
            if(this.state.selected==i){
                ele.classList.add('activeb')
            }
        });

        return(
            <div className="question-main">
                <div className="question-prompt">
                    <h2>{q.question}</h2>
                </div>
                <div className="answers-main">
                    <div className="answers-top">
                        <button className="answers-option-button" onClick={() => this.updateChoice(options[0], 0)}>{options[0]}</button>
                        <button className="answers-option-button" onClick={() => this.updateChoice(options[1], 1)}>{options[1]}</button>
                    </div>
                    <div className="answers-bot">
                        <button className="answers-option-button" onClick={() => this.updateChoice(options[2], 2)}>{options[2]}</button>
                        <button className="answers-option-button" onClick={() => this.updateChoice(options[3], 3)}>{options[3]}</button>
                    </div>
                </div>
                <div onClick={this.submitAnswer} className="answers-submit">
                    <h2>Submit</h2>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        );


    }

}

export default Question;