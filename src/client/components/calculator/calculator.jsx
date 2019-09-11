import React from 'react';
import styles from './style.scss';

class Calculator extends React.Component {
    
    removeHandler(index){
        this.setState({index:index});
        this.props.removeHandler(index);
    }

    render(){
        let calculatedRates = "";
        if (this.props.calculateList !== null) {
            calculatedRates = this.props.calculateList.map((rate, index)=>{
                return (
                    <div key={index} className={"col " + styles.calculateDiv}>
                        <p>Loan Amount:$ {rate.amount}</p>
                        <p>Year 1: {rate.year1_rate}%</p>
                        <p>Term: {rate.term} mths</p>
                        <p>Monthly Payment:$ {rate.monthlyPayment}</p>
                        <p>Total Payment:$ {rate.totalPayment}</p>
                        <button className="btn btn-outline-success" key={index} onClick={()=>{this.removeHandler(index)}}>Remove</button>
                    </div>
                );
            })
        }

        return(
            <div className="row">
                {calculatedRates}
            </div>
        );
    }
}

export default Calculator;