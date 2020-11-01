import React from 'react';

class Landing extends React.Component {
    constructor(props){
        super(props)
        this.gameStart = this.gameStart.bind(this);
    }

    gameStart(e){
        e.preventDefault();
        this.props.history.push('/trivia');
    }

    render() {
        return (
            <div className="main-landing">
                <h1>TriviaPrep</h1>
                <h2>Get ready to prep for trivia.</h2>
                <h3>You'll get 10 questions per round</h3>
                <button onClick={this.gameStart} className="play-trivia-button">Play Trivia</button>
            </div>
        );
    }
}

export default Landing;