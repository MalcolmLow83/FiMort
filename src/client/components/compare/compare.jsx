import React from 'react';

class Compare extends React.Component {

    removeHandler(index){
        this.setState({index:index});
        this.props.removeHandler(index);
    }

    render(){
        let selectedRates = "";
        if (this.props.compareList !== null) {
            selectedRates = this.props.compareList.map((rate, index)=>{
                return (
                    <div key={index} className="col">
                        <h5>Package {index+1}</h5>
                        <h6>{rate.name}</h6>
                        <p>Year 1: {rate.year1_rate} Year 2: {rate.year2_rate} Year 3: {rate.year3_rate}</p>
                        <button className="btn btn-outline-secondary" key={index} onClick={()=>{this.removeHandler(index)}}>Remove</button>
                    </div>
                );
            })
        } 

        return(
            <div className="row">
                {selectedRates}
            </div>
        );
    }
}

export default Compare;