import React from 'react';

import styles from './style.scss';

class List extends React.Component {
  
  selectHandler(index){
    this.props.selectHandler(index);
  }

  render() {
    let display = "";
    if (this.props.filtered === false){
      if (this.props.rates !== null) {
        display = this.props.rates.map((rate, index) => {
          return(
            <tr key ={index} onClick={()=>{this.selectHandler(index)}}>
              <th scope="row">{rate.name}</th>
              <td>{rate.year1_rate}</td>
              <td>{rate.year2_rate}</td>
              <td>{rate.year3_rate}</td>
            </tr>         
          );
        })
      }
    } else if (this.props.filteredRates !== null) {
      display = this.props.filteredRates.map((rate, index) => {
        return(
          <tr key ={index} onClick={()=>{this.selectHandler(index)}}>
            <th scope="row">{rate.name}</th>
            <td>{rate.year1_rate}</td>
            <td>{rate.year2_rate}</td>
            <td>{rate.year3_rate}</td>
          </tr>         
        );
      }) 
    };
    return (
      <div className={"row "  + styles.listRow}>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">Mortgage Package({this.props.matches}) </th>
              <th scope="col">Year 1 Rate</th>
              <th scope="col">Year 2 Rate</th>
              <th scope="col">Year 3 Rate</th>
            </tr>
          </thead>
          <tbody>
            {display}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;