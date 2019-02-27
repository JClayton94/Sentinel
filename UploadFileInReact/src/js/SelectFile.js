import React, { Component } from 'react';

class SelectFile extends Component {
  constructor() {
        super();
        this.state = {
             selectFile: "Select File: ",
             fileTypeMessage: ""
        }
        
        this.checkFileType = this.checkFileType.bind(this) 
    }



    checkFileType(){

        let fileValue = document.getElementById('fileUpload').value;
        console.log(fileValue);
        
        if( fileValue.endsWith('.pdf') || fileValue.endsWith('.PDF') ){
          this.setState({
               fileTypeMessage: ""
            });
        }
        else {
          this.setState({
               fileTypeMessage: "Please choose a PDF"
            });
        }
       
    }

    render() {
        return (

                <div>
                {this.state.selectFile}
                <input type="file" id="fileUpload" onChange={this.checkFileType}/>{this.state.fileTypeMessage}
                </div>
        );
    }
}

export default SelectFile;