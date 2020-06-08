import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Debits extends Component {
    constructor () {
        super();
        this.state = {
            debits: []
        }
    }

    componentDebits() {
        axios
        .get("https://moj-api.herokuapp.com/debits")
        .then((response) => {
            const data = response.data;
            console.log(data);
            this.setState({debits: data});
        })
    }
    render() {
        let display = (
            this.state.debits.map((debit) => {
                return (
                <>
                <div>Description: {debit.description}</div>
                <div>Amount: {debit.amount}</div>
                <div>Date: {debit.date}</div>
                <br />
                </>
                )
            })
        )
        return (
        <div className="App">
        <h1>Debits are:</h1>
        <Link to="/">Home</Link>
        <br /><br />
        <div>{display}</div>
        </div>
        )
    }
}

export default Debits