import React from 'react';
import styles from './style.scss';

class Filter extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "Your Loan Amount:"
        }
    }

    loanTypeHandler(event){
        this.setState({loanType:event.target.value});
        this.props.loanTypeHandler(event.target.value);
    }
    
    rateTypeHandler(event){
        this.setState({rateType:event.target.value});
        this.props.rateTypeHandler(event.target.value);
    }

    propTypeHandler(event){
        this.setState({propType:event.target.value});
        this.props.propTypeHandler(event.target.value);
    }

    compTypeHandler(event){
        this.setState({compType:event.target.value});
        this.props.compTypeHandler(event.target.value);
    }

    amountHandler(event){
        this.setState({amount:event.target.value});
        this.props.amountHandler(event.target.value);
    }
    
    submitHandler(event){
        // event.preventDefault;
        if (event.target.value < 100000) {
            this.setState({message: "Filter Failed: Min. loan amount is $100k"});
        } else {
            this.setState({message: "Your Loan Amount:"});
            this.props.submitHandler(event.target.value);
        }
    }

    render(){
        return(
            <div className="col-3">
                <h6>Select Your Filters</h6>
                    <label>New/Refi Loan:</label>
                    <select onChange={(event)=>{this.loanTypeHandler(event)}}>
                        <option value="new">New Loan</option>
                        <option value="refi">Refinance</option>    
                    </select>
                    <label>Floating/Fixed:</label>
                    <select onChange={(event)=>{this.rateTypeHandler(event)}}>
                        <option value="float">Floating Rate</option>
                        <option value="fixed">Fixed Rate</option>    
                    </select>
                    <label>HDB/Private Property:</label>
                    <select onChange={(event)=>{this.propTypeHandler(event)}}>
                        <option value="pvt">Private</option>
                        <option value="hdb">HDB</option>    
                    </select>
                    <label>BUC/Completed:</label>
                    <select onChange={(event)=>{this.compTypeHandler(event)}}>
                        <option value="completed">Completed</option>
                        <option value="buc">BUC</option>
                    </select>
                    <label>{this.state.message}</label>
                    <input onChange={(event)=>{this.amountHandler(event)}} value={this.props.amount}/>
                    <button onClick={(event)=>{this.submitHandler(event)}} value={this.state.amount}>filter</button>
                    <button onClick={this.props.test}>test</button>
            </div>
        );
    }
}

export default Filter;