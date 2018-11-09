import React, {Component} from 'react'
import './Animations.css'

export default class Animations extends Component {
    constructor() {
        super()
    }
    setDifferentClass = (e) => {
        e.target.classList.toggle('animated-square');
    }
    render() {
        return (
            <div className="animations-main-container">
                <h4>Animations</h4>
                <div className="animations-child-container">
                    <div className="square" onClick={this.setDifferentClass}></div>
                    <div className="change-color"></div>
                    <div className="slide"></div> 
                </div>
            </div>
        )
    }
}