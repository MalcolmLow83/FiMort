import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import List from './components/list/list';
import Filter from './components/filter/filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banks: null,
      ref_rates: null,
      packages: null,
      rates: null,
      loanType: "both",
      rateType: "both",
      propType: "both",
      compType: "both"
    };
    this.loanTypeHandler = this.loanTypeHandler.bind(this);
    this.rateTypeHandler = this.rateTypeHandler.bind(this);
    this.propTypeHandler = this.propTypeHandler.bind(this);
    this.compTypeHandler = this.compTypeHandler.bind(this);
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

  loanTypeHandler(loanType){
    this.state.loanType = loanType;
    this.setState({loanType: loanType});
  };

  rateTypeHandler(rateType){
    this.state.rateType = rateType;
    this.setState({rateType: rateType});
  };

  propTypeHandler(propType){
    this.state.propType = propType;
    this.setState({propType: propType});
  };

  compTypeHandler(compType){
    this.state.compType = compType;
    this.setState({compType: compType});
  };

  submitTypeHandler(){
    console.log("submitTypeHandler");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Filter loanTypeHandler={this.loanTypeHandler} loanType={this.state.loanType} 
                  rateTypeHandler={this.rateTypeHandler} rateType={this.state.rateType}
                  propTypeHandler={this.propTypeHandler} propType={this.state.propType}
                  compTypeHandler={this.compTypeHandler} compType={this.state.compType}
                  submitTypeHandler={this.submitTypeHandler}
          />
          <List packages={this.state.packages} rates={this.state.rates}/>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
