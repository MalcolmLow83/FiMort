import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import List from './components/list/list';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banks: null,
      ref_rates: null,
      packages: null,
      mapping: null
    };
  }

  componentDidMount(){
    fetch("/banks")
    .then(response => response.json())
    .then((result) => {
      this.setState({banks:result.banks})
    },
    (error) => {
      console.log(error)
    })

    fetch("/ref_rates")
    .then(response => response.json())
    .then((result) => {
      this.setState({ref_rates:result.ref_rates})
    },
    (error) => {
      console.log(error)
    })

    fetch("/packages")
    .then(response => response.json())
    .then((result) => {
      this.setState({packages:result.packages})
    },
    (error) => {
      console.log(error)
    })

    fetch("/mappings")
    .then(response => response.json())
    .then((result) => {
      this.setState({mapping:result.mappings})
    },
    (error) => {
      console.log(error)
    })
  
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Form  />
          <List packages={this.state.packages}/>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);