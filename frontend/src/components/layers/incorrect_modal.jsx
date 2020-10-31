import React from 'react';

class IncorrectModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <div className="incorrect-modal-main">
                    <h2 className="incorrect-modal-title">Incorrect!</h2>
                    <h3 className="incorrect-modal-answer">The correct answer was:</h3>
                    <h3 className="incorrect-modal-answer-2"><strong>{this.props.answer}</strong></h3>
                    <button onClick={this.handleClose} className="incorrect-modal-close">Next</button>
                </div>
            </div>
        );
    }
}

export default IncorrectModal;