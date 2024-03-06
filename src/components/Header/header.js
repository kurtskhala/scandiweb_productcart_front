import { Link } from 'react-router-dom';
import './headerStyles.css';
import React, { Component } from 'react';


class Header extends Component {
    state = {  } 



    render() { 
        return (
            <div className="app-header">
                <h2 className="app-header-text">{this.props.h2}</h2>
                <div className="app-header-left_side">
                    <Link to='/addproduct' style={{display: this.props.btn1 === "ADD"? "block" : "none"}}>
                        <button className="app-header-btn">{this.props.btn1}</button>
                    </Link>
                    <button
                        style={{display: this.props.btn1 === "Save"? "block" : "none"}}
                        className="app-header-btn" 
                        form='product_form' 
                        type='submit'
                        
                    >
                        {this.props.btn1}
                    </button>
                    <Link to='/' style={{display: this.props.btn2 === "Cancel"? "block" : "none"}}>
                        <button className="app-header-btn">{this.props.btn2}</button>
                    </Link>
                    <button
                        style={{display: this.props.btn2 === "MASS DELETE"? "block" : "none"}}
                        className="app-header-btn" 
                        form='check' 
                        type='submit'
                        
                    >
                        {this.props.btn2}
                    </button>
                </div>
            </div>
        );
    }
}
 
export default Header;

