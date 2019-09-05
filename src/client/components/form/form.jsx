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
      <div className="col">
        <h6>form component</h6>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;
