import React, { Component } from 'react';

class SubmitButton extends Component {


    render() {
        return (

                <div>
                <input type="button" id="submitButton" value="Submit" onClick={this.props.message}/>
                </div>
        );
    }
}

export default SubmitButton;