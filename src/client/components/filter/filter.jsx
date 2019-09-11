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

    // lockInHandler(event){
    //     this.setState({lockIn:event.target.value});
    //     this.props.lockInHandler(event.target.value);
    // }

    amountHandler(event){
        this.setState({amount:event.target.value});
        this.props.amountHandler(event.target.value);
        if (event.target.value < 100000) {
            this.setState({message: "Min. loan amount is $100k"});
        } else {
            this.setState({message: "Your Loan Amount:"});
        }   
    }

    termHandler(event){
        this.setState({term:event.target.value});
        this.props.termHandler(event.target.value);
    }
    
    render(){
        return(
            <div className={"col-4 " + styles.filterCol}>
                <img src="https://www.moneysense.ca/wp-content/uploads/2014/10/Mortgagekeyboard-ArdaGuldogan-1000.jpg" />
                
                <div className={styles.filters}>
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
                        {/* <label>lock-in:</label>
                        <select onChange={(event)=>{this.lockInHandler(event)}} className="custom-select-sm">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select> */}
                    </div>
                    <div>
                        <label>{this.state.message}</label>
                        <input type="number" onChange={(event)=>{this.amountHandler(event)}} value={this.props.amount}/>
                    </div>
                    <div>
                        <label>Loan Term in months:</label>
                        <input type="number" onChange={(event)=>{this.termHandler(event)}} value={this.props.term}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;