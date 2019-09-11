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
                    <h5>Select Your Filters</h5>
                    <label>New or Refinance Loan</label>
                    <div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={(event)=>{this.loanTypeHandler(event)}} value="new" type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadioInline1">New Loan</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={(event)=>{this.loanTypeHandler(event)}} value="refi" type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadioInline2">Refinance</label>
                        </div> 
                    </div>
                    <hr />
                    <label>Floating or Fixed Rate</label>
                    <div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={(event)=>{this.rateTypeHandler(event)}} value="float" type="radio" id="customRadioInline3" name="customRadioInline3" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadioInline3">Floating Rate</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={(event)=>{this.rateTypeHandler(event)}} value="fixed" type="radio" id="customRadioInline4" name="customRadioInline3" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadioInline4">Fixed Rate</label>
                        </div>
                    </div>
                    <hr />
                    <label>HDB, Private or Commercial Property</label>
                    <div>
                        <div className="custom-control custom-radio">
                            <input onChange={(event)=>{this.propTypeHandler(event)}} value="pvt" type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" for="customRadio1">Private</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input onChange={(event)=>{this.propTypeHandler(event)}} value="hdb" type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" for="customRadio2">HDB</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input onChange={(event)=>{this.propTypeHandler(event)}} value="commercial" type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" for="customRadio3">Commerical</label>
                        </div>
                    </div>
                    <hr />
                    <label>BUC or Completed</label>
                    <div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={(event)=>{this.compTypeHandler(event)}} value="completed" type="radio" id="customRadioInline5" name="customRadioInline5" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadioInline5">Completed</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input onChange={(event)=>{this.compTypeHandler(event)}} value="buc" type="radio" id="customRadioInline6" name="customRadioInline5" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadioInline6">BUC</label>
                        </div> 
                    </div>
                    <hr />
                    <label>{this.state.message}</label>
                    <div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                        <input onChange={(event)=>{this.amountHandler(event)}} value={this.props.amount} type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                            <div className="input-group-append">
                                <span className="input-group-text">/-</span>
                            </div>
                        </div>
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