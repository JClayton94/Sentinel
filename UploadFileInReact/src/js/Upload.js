import React, { Component } from 'react';
import '../css/Upload.css';

import ReportTitle from './ReportTitle.js'
import SelectFile from './SelectFile.js'
import SubmitButton from './SubmitButton.js'


class Upload extends Component {
    constructor() {
        super();
        this.state = {
            title: "Upload Files",
            reportNameMessage: "",
            submitMessage: ""
        }

        this.submitFile = this.submitFile.bind(this)

    }

   


    submitFile() {
        let reportTitleValue = document.getElementById('ReportName').value;
        let filevalue = document.getElementById('fileUpload').value;

        console.log(reportTitleValue);

        
         if (reportTitleValue !== "" && filevalue !== "") {
            this.setState({
               reportNameMessage: "",
               submitMessage: "File Has Been Submitted"
            });
            document.location.reload(true)
         }
         else if (reportTitleValue === "" && filevalue !== "") {
            this.setState({
              reportNameMessage: "Please enter report title",
              submitMessage: ""
            });
         }
         else if (reportTitleValue !== "" && filevalue === "") {
            this.setState({
               reportNameMessage: "",
               submitMessage: "Please Select a File"
            });
         }
        
        else {
            this.setState({
                  reportNameMessage: "Please enter report title",
                  submitMessage: "Please Select a File"
            });
        }



    }




    render() {
        return (
            <div className="pageContent">
                <h2>{this.state.title}</h2>

                <div className="reportSection">
                    <ReportTitle/>
                </div>

                <div className="chooseFile">
                    <SelectFile />
                </div>

                <SubmitButton message={this.submitFile} />
              <p> {this.state.reportNameMessage} <br></br> {this.state.submitMessage} </p>
            
               

            </div>
        );
    }

}

export default Upload;