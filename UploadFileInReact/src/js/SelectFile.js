import React, { Component } from 'react';

class SelectFile extends Component {

    render() {
        return (

                <div>
                     Select File: 
                    <input type="file" id="fileUpload" onChange={this.props.clickable}/>
                 
                </div>
        );
    }
}

export default SelectFile;