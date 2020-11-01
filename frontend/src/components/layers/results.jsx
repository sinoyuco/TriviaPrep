import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.playAgain = this.playAgain.bind(this);
    }

    playAgain(e) {
        e.preventDefault();
        this.props.history.push('/trivia');
    }

    render() {
        return (
            <div className="main-results">
                <h1 className="main-results-logo">TriviaPrep</h1>
                <h1>Your score is</h1>
                <h2>{this.props.location.state.score*10}%</h2>
                <button onClick={this.playAgain} className="play-again-button">Play Again</button>
            </div>
        );
    }
}

export default Results;