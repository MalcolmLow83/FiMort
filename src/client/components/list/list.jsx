import React from 'react';

import styles from './style.scss';

class List extends React.Component {

  render() {
    let display = "";
    if (this.props.rates !== null) {
      display = this.props.rates.map((rate, index) => {
        return(
          <div>
            <p key={index+0}>{rate.name} {rate.year1_rate} {rate.year2_rate} {rate.year3_rate}</p>
          </div>
        )
      })
    }

    return (
      <div className="col">
        <h6>list component</h6>
        <button onClick={this.props.calculateHandler}>click</button>
        {display}
      </div>
    );
  }
}

export default List;