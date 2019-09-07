import React from 'react';

import styles from './style.scss';

class List extends React.Component {
  render() {
    let display = "";
    if (this.props.rates !== null) {
      display = this.props.rates.map((rate, index) => {
        return(                  
          <tr key ={index}>
            <th scope="row">{rate.name}</th>
            <td>{rate.year1_rate}</td>
            <td>{rate.year2_rate}</td>
            <td>{rate.year3_rate}</td>
          </tr>         
        )
      })
    }
    return (
      <div className="col">
        <h6>Matches ({this.props.matches})</h6>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Mortgage Package</th>
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