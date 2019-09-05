import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import List from './components/list/list';
import Counter from './components/counter/counter';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Form />
          Welcome.
          <List />
          <Counter message={this.state.message} />
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
