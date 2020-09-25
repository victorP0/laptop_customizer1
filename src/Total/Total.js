import React, { Component } from 'react';
import './Total.css';


export default class Total extends Component {

    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.USCurrencyFormat.format(Object.keys(this.props.selected).reduce(
                        (acc, curr) => acc + this.props.selected[curr].cost,
                        0
                    ))}
                </div>
            </div>
        )
    }
}