import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Upload from './Upload.js'


import '../css/NavBar.css'


class NavBar extends Component {
    constructor(){
        super();
        this.state ={

            page1:"Upload",
            page2:"History",
            page3:"Help"

        }
    }


    render(){
        return(
            <div>
            <Router>
                    <nav>
                        <div className="navMenu">
                            <ul className="topNav" id="topNavJS">
                                <Link to="/">{this.state.page1}</Link>
                                <Link to="/History">{this.state.page2}</Link>
                                <Link to="/Help">{this.state.page3}</Link>
                            </ul> 
                              <Route exact path="/" component={Upload}/>      
                        </div>    
                    </nav>
            </Router>
            </div>
        );
    }


}

export default NavBar;