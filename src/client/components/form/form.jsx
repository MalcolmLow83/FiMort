import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha',
    };
  }

  render() {
    return (
      <div className="col-5">
        <h6>form component</h6>
        <div>
        <select>
            <option value="new">New Loan</option>
            <option value="refi">Refinance</option>
          </select>
        </div>
        <div>
        <select>
            <option value="float">floating rate</option>
            <option value="fixed">fixed rate</option>
          </select>
        </div>  
        <div>
        <select>
            <option value="hdb">hdb</option>
            <option value="pvt">private</option>
          </select>
        </div>  
          <input></input>
      </div>
    );
  }
}

export default Form;
