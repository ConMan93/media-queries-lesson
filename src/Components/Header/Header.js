import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-title">
                    Hello!
                </div>
                <div className="nav-items">
                    <span className="nav-links">Home</span>
                    <span className="nav-links">Store</span>
                    <span className="nav-links">Login</span>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}