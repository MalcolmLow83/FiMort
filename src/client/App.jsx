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
      year1_rates: null,
      year2_rates: null,
      year3_rates: null,
      rates: null
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
      this.setState({rates:result.rates})
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
          <List packages={this.state.packages} rates={this.state.rates}/>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
