import React from 'react';

import styles from './style.scss';

class List extends React.Component {

  render() {
    let display = "";
    if (this.props.packages !== null) {
      display = this.props.packages.map((rate, index) => {
        return(
          <div>
            <p key={index + rate.id}>{rate.name}</p>
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
