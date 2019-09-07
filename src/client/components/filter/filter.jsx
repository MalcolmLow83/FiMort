import React from 'react';
import styles from './style.scss';

class Filter extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "Select your filter"
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
            this.setState({message: "Min. loan amount is $100k"});

        } else {
            this.setState({message: "Filtered"});
            this.props.submitHandler(event.target.value);
        }
    }

    render(){
        return(
            <div className="col-2">
                <h6>{this.state.message}</h6>
                
                    <select onChange={(event)=>{this.loanTypeHandler(event)}}>
                        <option value="both">Any</option>
                        <option value="new">New Loan</option>
                        <option value="refi">Refinance</option>    
                    </select>
                    <select onChange={(event)=>{this.rateTypeHandler(event)}}>
                        <option value="both">Any</option>
                        <option value="float">Floating Rate</option>
                        <option value="fixed">Fixed Rate</option>    
                    </select>
                    <select onChange={(event)=>{this.propTypeHandler(event)}}>
                        <option value="both">Any</option>
                        <option value="hdb">HDB</option>
                        <option value="pvt">Private</option>    
                    </select>
                    <select onChange={(event)=>{this.compTypeHandler(event)}}>
                        <option value="both">Any</option>
                        <option value="buc">BUC</option>
                        <option value="completed">Completed</option>    
                    </select>
                    <input onChange={(event)=>{this.amountHandler(event)}} value={this.props.amount}/>
                    <button onClick={(event)=>{this.submitHandler(event)}} value={this.state.amount}>filter</button> 
                    
            
            </div>
        );
    }
}

export default Filter;