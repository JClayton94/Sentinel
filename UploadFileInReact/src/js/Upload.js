import React, { Component } from 'react';
import '../css/Upload.css';

import ReportTitle from './ReportTitle.js'
import SelectFile from './SelectFile.js'



class Upload extends Component {
    constructor() {
        super();
        this.state = {
            title: "Upload Files",
            reportNameMessage: "",
            fileTypeMessage: "",
            submitMessage: "",
            ableToUpload: "false"

        }



        this.submitFile = this.submitFile.bind(this);
        this.ableToSubmit = this.ableToSubmit.bind(this);
        this.showKeyWords = this.showKeyWords.bind(this);
         this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        let button = document.getElementById('submitButton');
        button.disabled = true;
    }


    ableToSubmit() {

        let reportTitleValue = document.getElementById('ReportName').value;
        let filevalue = document.getElementById('fileUpload').value;
        let button = document.getElementById('submitButton');


        if (reportTitleValue !== "" && filevalue !== "" && filevalue.endsWith('.pdf')) {

            button.disabled = false;
            this.setState({
                reportNameMessage: "",
                fileTypeMessage: "",
                submitMessage: ""

            });


        }

        else {
            button.disabled = true;
            this.setState({
                fileTypeMessage: "Please choose a PDF"
            });
        }

    }



    submitFile() {

        // document.location.reload(true)

        let reportTitleValue = document.getElementById('ReportName').value;
        let filevalue = document.getElementById('fileUpload').value;

        if (reportTitleValue !== "" && filevalue !== "" && filevalue.endsWith('.pdf')) {

            this.setState({
                reportNameMessage: "",
                fileTypeMessage: "",
                submitMessage: "File Has Been Submitted"

            });

            let filePath = document.getElementById('fileUpload').value;
            console.log(filePath);
            return filePath;

        }



    }

    showKeyWords() {

        let keywordLocation = document.getElementById('keyWordLocation');
        let keywordValue = document.getElementById('keyWordAmount').value;

        //change hidden not hidden on the paragraph tag.
    }

    
refresh(){
document.location.reload(true);
}
    change


    render() {

        return (
            <div className="pageContent">
                <h2>{this.state.title}</h2>

                <p id="intro">Welcome. In order to use this upload service you will need to select <br></br>
                    a PDF file. Please select one and add a title for the report to continue.</p>

                    <div  className="reportSection"><ReportTitle clickable={this.ableToSubmit} /></div>

                    <div className="chooseFile"> <SelectFile  clickable={this.ableToSubmit} /></div>

                    <button onClick={this.submitFile} id="submitButton" >Submit</button>
                    <p>{this.state.fileTypeMessage}</p>
                    <p>{this.state.reportNameMessage}</p>
                    <p>{this.state.submitMessage}</p>

                    <button onClick={this.refresh} id="refreshButton" >New Submition</button>

                    <p id="keyWordLocation" hidden > KeyWords: <input type="text" id ="keyWordAmount" /> </p>

                </div>

         
        );
    }

}

export default Upload;