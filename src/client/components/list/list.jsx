import React from 'react';

import styles from './style.scss';

class List extends React.Component {

  render() {
    let display = "";
    if (this.props.rates !== null) {
      display = this.props.rates.map((rate, index) => {
        return(
          <div className="rateList">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">{rate.name}</li>
              <li class="list-group-item">{rate.year1_rate}</li>
              <li class="list-group-item">{rate.year2_rate}</li>
              <li class="list-group-item">{rate.year3_rate}</li>
            </ul>
          </div>
        )
      })
    }

    return (
      <div className="col">
        <h6>list component</h6>
        {display}
      </div>
    );
  }
}

export default List;