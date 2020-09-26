import React, { Component } from 'react';
import './Total.css';


const Total = (props)=>{

const currency = props.USCurrencyFormat

    return (
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
            {currency.format(Object.keys(props.selected).reduce(
                (acc, curr) => acc + props.selected[curr].cost,
                0
            ))}
        </div>
    </div>

    )
}

export default Total