import React, {Component} from 'react'
import './Transitions.css'

export default class Transitions extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="transitions-main-container">
                <h4>Transitions</h4>
                <div className="transitions-child-container">
                    <div className="grow-on-hover"></div>
                    <div className="shrink-on-hover"></div>
                    <div className="change-color-hover"></div>
                </div>
            </div>
        )
    }
}