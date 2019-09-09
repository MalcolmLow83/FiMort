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
        if (event.target.value < 100000) {
            this.setState({message: "Filter Failed: Min. loan amount is $100k"});
        } else {
            this.setState({message: "Your Loan Amount:"});
        }   
    }
    
    render(){
        return(
            <div className="col-4">
                <h6>Select Your Filters</h6>
                <div>
                    <label>New/Refi Loan:</label>
                    <select onChange={(event)=>{this.loanTypeHandler(event)}} className="custom-select-sm">
                        <option value="new">New Loan</option>
                        <option value="refi">Refinance</option>    
                    </select>
                </div>
                <div>
                    <label>Floating/Fixed:</label>
                    <select onChange={(event)=>{this.rateTypeHandler(event)}} className="custom-select-sm">
                        <option value="float">Floating Rate</option>
                        <option value="fixed">Fixed Rate</option>    
                    </select>
                </div>
                <div>
                    <label>HDB/Private Property:</label>
                    <select onChange={(event)=>{this.propTypeHandler(event)}} className="custom-select-sm">
                        <option value="pvt">Private</option>
                        <option value="hdb">HDB</option>
                        <option value="commercial">Commercial</option>    
                    </select>
                </div>
                <div>
                    <label>BUC/Completed:</label>
                    <select onChange={(event)=>{this.compTypeHandler(event)}} className="custom-select-sm">
                        <option value="completed">Completed</option>
                        <option value="buc">BUC</option>
                    </select>
                </div>
                <div>
                    <label>lock-in:</label>
                    <select className="custom-select-sm">
                        <option value="true">Yes</option>
                        <option value="false">Yes</option>
                    </select>
                </div>
                <div>
                    <label>{this.state.message}</label>
                    <input onChange={(event)=>{this.amountHandler(event)}} value={this.props.amount}/>
                    <button onClick={this.props.submitHandler}>filter</button>
                </div>
            </div>
        );
    }
}

export default Filter;