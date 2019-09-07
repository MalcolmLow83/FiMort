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
      amount: 800000,
      matches: 0
    };
    this.loanTypeHandler = this.loanTypeHandler.bind(this);
    this.rateTypeHandler = this.rateTypeHandler.bind(this);
    this.propTypeHandler = this.propTypeHandler.bind(this);
    this.compTypeHandler = this.compTypeHandler.bind(this);
    this.amountHandler = this.amountHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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
      this.setState({matches:result.rates.length})
    },
    (error) => {
      console.log(error)
    })
  }

  loanTypeHandler(loanType){
    let rates = this.state.rates;
    let filteredRates = rates.filter(rate => rate.new_refi === loanType || rate.new_refi === "both");
    this.state.rates = filteredRates;
    this.setState({rates:filteredRates})
    this.state.matches = filteredRates.length;
    this.setState({matches: filteredRates.length});
  };

  rateTypeHandler(rateType){
    let rates = this.state.rates;
    let filteredRates = rates.filter(rate => rate.float_fixed === rateType || rate.float_fixed === "both");
    this.state.rates = filteredRates;
    this.setState({rates:filteredRates})
    this.state.matches = filteredRates.length;
    this.setState({matches: filteredRates.length});
  };

  propTypeHandler(propType){
    let rates = this.state.rates;
    let filteredRates = rates.filter(rate => rate.hdb_pvt === propType || rate.hdb_pvt === "both");
    this.state.rates = filteredRates;
    this.setState({rates:filteredRates})
    this.state.matches = filteredRates.length;
    this.setState({matches: filteredRates.length});
  };

  compTypeHandler(compType){
    let rates = this.state.rates;
    let filteredRates = rates.filter(rate => rate.buc_completed === compType || rate.buc_completed === "both");
    this.state.rates = filteredRates;
    this.setState({rates:filteredRates})
    this.state.matches = filteredRates.length;
    this.setState({matches: filteredRates.length});
  };

  amountHandler(amount){
    this.state.amount = amount;
    this.setState({amount: amount});
    this.state.matches = filteredRates.length;
    this.setState({matches: filteredRates.length});
  }

  submitHandler(event){
    let amount = this.state.amount;
    let rates = this.state.rates;
    let filteredRates = rates.filter(rate => rate.min_loan <= amount);
    this.state.rates = filteredRates;
    this.setState({rates:filteredRates})
    this.state.matches = filteredRates.length;
    this.setState({matches: filteredRates.length});
  };

  filtering(){
    console.log("giltering");
  }

  render() {
    this.filtering();
    return (
      <div className="container">
        <div className="row">
          <Filter loanTypeHandler={this.loanTypeHandler} loanType={this.state.loanType} 
                  rateTypeHandler={this.rateTypeHandler} rateType={this.state.rateType}
                  propTypeHandler={this.propTypeHandler} propType={this.state.propType}
                  compTypeHandler={this.compTypeHandler} compType={this.state.compType}
                  amountHandler={this.amountHandler} amount={this.state.amount}
                  submitHandler={this.submitHandler}
          />
          <List filtered={this.state.filtered} rates={this.state.rates} filteredRates={this.state.filteredRates}
                matches={this.state.matches}
          />
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
