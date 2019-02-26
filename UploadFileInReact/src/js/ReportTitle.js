import React, { Component } from 'react';

class ReportTitle extends Component {
  constructor() {
        super();
        this.state = {
            ReportTitle: "Report Title:"
        }

    
    }

    render() {
        return (

                <div>
                {this.state.ReportTitle}
                <input type="text" placeholder="Enter name" id="ReportName"/>
                </div>
        );
    }
}

export default ReportTitle;