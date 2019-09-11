import React from 'react';
import styles from './style.scss';

class Compare extends React.Component {

    render(){
        let selectedRates = "";
        if (this.props.compareList !== null) {
            selectedRates = this.props.compareList.map((rate, index)=>{
                return (
                    <div key={index} className={"col " + styles.compareRow}>
                        <h5 className={styles.package}>Package {index+1}</h5>
                        <h6>{rate.name}</h6>
                        <p>Year 1: {rate.year1_rate} Year 2: {rate.year2_rate} Year 3: {rate.year3_rate}</p>
                    </div>
                );
            })
        }

        return(
            <div className={"row "  + styles.compareRow}>
                {selectedRates}
            </div>
        );
    }
}

export default Compare;