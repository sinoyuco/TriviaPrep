import React from 'react';

class CorrectModal extends React.Component {
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e){
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <div className="correct-modal-main">
                    <h2 className="correct-modal-title">Correct!</h2>
                    <button onClick={this.handleClose} className="correct-modal-close">Next</button>
                </div>
            </div>
        );
    }
}

export default CorrectModal;