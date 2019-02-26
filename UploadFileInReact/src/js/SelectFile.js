import React, { Component } from 'react';

class SelectFile extends Component {
  constructor() {
        super();
        this.state = {
             SelectFile: "Select File: "
        }

    
    }

    render() {
        return (

                <div>
                {this.state.SelectFile}
                <input type="file" id="fileUpload"/>
                </div>
        );
    }
}

export default SelectFile;