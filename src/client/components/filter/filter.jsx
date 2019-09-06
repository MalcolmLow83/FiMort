import React from 'react';
import styles from './style.scss';

class Filter extends React.Component {
    
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

    submitHandler(){
        // event.preventDefault;
        console.log("submiting");
    }

    render(){
        return(
            <div className="col-2">
                <h6>filter component</h6>
                
                    <select onChange={(event)=>{this.loanTypeHandler(event)}}>
                        <option value="new">New Loan</option>
                        <option value="refi">Refinance</option>    
                    </select>
                    <select onChange={(event)=>{this.rateTypeHandler(event)}}>
                        <option value="float">Floating Rate</option>
                        <option value="fixed">Fixed Rate</option>    
                    </select>
                    <select onChange={(event)=>{this.propTypeHandler(event)}}>
                        <option value="hdb">HDB</option>
                        <option value="pvt">Private</option>    
                    </select>
                    <select onChange={(event)=>{this.compTypeHandler(event)}}>
                        <option value="buc">BUC</option>
                        <option value="completed">Completed</option>    
                    </select>
                    <button type="submit" onClick={this.submitHandler}>filter</button> 
                    {/* <input type="submit" value="Submit" /> */}
            
            </div>
        );
    }
}

export default Filter;