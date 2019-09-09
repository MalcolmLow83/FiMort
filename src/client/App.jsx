import React from 'react';
import { hot } from 'react-hot-loader';

import Nav from './components/nav/nav';
import Form from './components/form/form';
import List from './components/list/list';
import Filter from './components/filter/filter';

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banks: null,
      ref_rates: null,
      packages: null,
      rates: null,
      filtered: false,
      filteredRates: null,
      loanType: "new",
      rateType: "float",
      propType: "private",
      compType: "completed",
      amount: 100000,
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
    let filteredRates = this.state.rates;
    let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
    let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
    let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
    let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
    let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
    this.state.matches = filteredRates5.length;
    this.setState({matches: filteredRates5.length});
    this.state.filteredRates = filteredRates5;
    this.setState({filteredRates: filteredRates5});
    this.state.filtered = true;
    this.setState({filtered: true});

    this.state.loanType = loanType;
    this.setState({loanType:loanType});
  };

  rateTypeHandler(rateType){
    let filteredRates = this.state.rates;
    let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
    let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
    let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
    let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
    let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
    this.state.matches = filteredRates5.length;
    this.setState({matches: filteredRates5.length});
    this.state.filteredRates = filteredRates5;
    this.setState({filteredRates: filteredRates5});
    this.state.filtered = true;
    this.setState({filtered: true});

    this.state.rateType = rateType;
    this.setState({rateType:rateType});
  };

  propTypeHandler(propType){
    let filteredRates = this.state.rates;
    let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
    let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
    let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
    let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
    let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
    this.state.matches = filteredRates5.length;
    this.setState({matches: filteredRates5.length});
    this.state.filteredRates = filteredRates5;
    this.setState({filteredRates: filteredRates5});
    this.state.filtered = true;
    this.setState({filtered: true});

    this.state.propType = propType;
    this.setState({propType:propType});
  };

  compTypeHandler(compType){
    let filteredRates = this.state.rates;
    let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
    let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
    let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
    let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
    let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
    this.state.matches = filteredRates5.length;
    this.setState({matches: filteredRates5.length});
    this.state.filteredRates = filteredRates5;
    this.setState({filteredRates: filteredRates5});
    this.state.filtered = true;
    this.setState({filtered: true});

    this.state.compType = compType;
    this.setState({compType:compType});
  };

  amountHandler(amount){
    let filteredRates = this.state.rates;
    let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
    let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
    let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
    let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
    let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
    this.state.matches = filteredRates5.length;
    this.setState({matches: filteredRates5.length});
    this.state.filteredRates = filteredRates5;
    this.setState({filteredRates: filteredRates5});
    this.state.filtered = true;
    this.setState({filtered: true});

    this.state.amount = amount;
    this.setState({amount: amount});
  }

  submitHandler(event){
    let filteredRates = this.state.rates;
    let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
    let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
    let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
    let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
    let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
    this.state.matches = filteredRates5.length;
    this.setState({matches: filteredRates5.length});
    this.state.filteredRates = filteredRates5;
    this.setState({filteredRates: filteredRates5});
    this.state.filtered = true;
    this.setState({filtered: true});
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Nav />
          <Form />
        </div>
        <div className="row">
          <Filter loanTypeHandler={this.loanTypeHandler} loanType={this.state.loanType} 
                  rateTypeHandler={this.rateTypeHandler} rateType={this.state.rateType}
                  propTypeHandler={this.propTypeHandler} propType={this.state.propType}
                  compTypeHandler={this.compTypeHandler} compType={this.state.compType}
                  amountHandler={this.amountHandler} amount={this.state.amount}
                  submitHandler={this.submitHandler} test={this.test}
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
