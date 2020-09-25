import React, { Component } from 'react';
import './Summary.css';
import Total from '../Total/Total'
import ItemsChosen from '../ItemsChosen/ItemsChosen';

export default class Summary extends Component {

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <ItemsChosen selected={this.props.selected} />
                <Total
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            </section>
        )
    }
}