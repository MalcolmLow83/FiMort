import React from 'react';
import { hot } from 'react-hot-loader';

import Nav from './components/nav/nav';
import Filter from './components/filter/filter';
import List from './components/list/list';
import Compare from './components/compare/compare';
import Calculator from './components/calculator/calculator';

import Form from './components/form/form';


import styles from './style.scss';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banks: null,
      ref_rates: null,
      packages: null,
      rates: null,
      filtered: false,
      filteredRates: [],
      loanType: "new",
      rateType: "float",
      propType: "private",
      compType: "completed",
      // lockIn: true,
      amount: 100000,
      matches: 0,
      compareList: []
    };
    this.loanTypeHandler = this.loanTypeHandler.bind(this);
    this.rateTypeHandler = this.rateTypeHandler.bind(this);
    this.propTypeHandler = this.propTypeHandler.bind(this);
    this.compTypeHandler = this.compTypeHandler.bind(this);
    // this.lockInHandler = this.lockInHandler.bind(this);
    this.amountHandler = this.amountHandler.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
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

  // lockInHandler(lockIn){
  //   console.log("lockIn",typeof lockIn);
  //   let filteredRates = this.state.rates;
  //   let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
  //   let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
  //   let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
  //   let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
  //   console.log(filteredRates4);
  //   let filteredRates5 = filteredRates4.filter(rate => rate.lock_In <= this.state.lockIn);
  //   console.log(filteredRates5);
  //   let filteredRates6 = filteredRates5.filter(rate => rate.min_loan <= this.state.amount);
  //   this.state.matches = filteredRates6.length;
  //   this.setState({matches: filteredRates6.length});
  //   this.state.filteredRates = filteredRates6;
  //   this.setState({filteredRates: filteredRates6});
  //   this.state.filtered = true;
  //   this.setState({filtered: true});

  //   this.state.lockIn = lockIn;
  //   this.setState({lockIn: lockIn});
  // }

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

  // submitHandler(event){
  //   let filteredRates = this.state.rates;
  //   let filteredRates1 = filteredRates.filter(rate => rate.new_refi === this.state.loanType || rate.new_refi === "both");
  //   let filteredRates2 = filteredRates1.filter(rate => rate.float_fixed === this.state.rateType);
  //   let filteredRates3 = filteredRates2.filter(rate => rate.hdb_pvt === this.state.propType || rate.hdb_pvt === "both");
  //   let filteredRates4 = filteredRates3.filter(rate => rate.buc_completed === this.state.compType || rate.buc_completed === "both");
  //   let filteredRates5 = filteredRates4.filter(rate => rate.min_loan <= this.state.amount);
  //   this.state.matches = filteredRates5.length;
  //   this.setState({matches: filteredRates5.length});
  //   this.state.filteredRates = filteredRates5;
  //   this.setState({filteredRates: filteredRates5});
  //   this.state.filtered = true;
  //   this.setState({filtered: true});
  // };

  selectHandler(index){
    if (this.state.filtered === false && this.state.compareList.length < 2){
      this.state.compareList.push(this.state.rates[index])
      this.setState({compareList: this.state.compareList});
    } else if (this.state.filtered === true && this.state.compareList.length < 2) {
      let filteredRates = this.state.filteredRates[index]
      let compareList = this.state.compareList;
      compareList.push(filteredRates)
      this.setState({compareList: compareList})
    }
  };

  removeHandler(index){
    let compareList = this.state.compareList;
    compareList.splice(index, 1);
    this.setState({compareList: compareList});
  }

  render() {
      
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img className={styles.indexImgRoof} src="https://static.vecteezy.com/system/resources/previews/000/169/843/non_2x/red-roof-tile-vector-seamless-background.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img className={"img-fluid" + styles.indexImg} src="https://cdn.pixabay.com/photo/2013/07/26/15/49/money-167735_960_720.jpg" />
          </div>
          <div className="col">
            <img className={"img-fluid"+ styles.indexImg} src="https://www.theadviser.com.au/images/resize/mortgage-house-1-ta_b684.jpg" />
          </div>
          <div className="col">
            <img className={"img-fluid"+ styles.indexImg} src="https://cdn.pixabay.com/photo/2013/07/26/15/48/house-167734_960_720.jpg" />
          </div>
        </div>
        
        <div className="row">
          <Nav />
          <Router>
              <Route path="/form" component={Form} />
          </Router>
        </div>
        <div className="row">
          <Filter loanTypeHandler={this.loanTypeHandler} loanType={this.state.loanType} 
                  rateTypeHandler={this.rateTypeHandler} rateType={this.state.rateType}
                  propTypeHandler={this.propTypeHandler} propType={this.state.propType}
                  compTypeHandler={this.compTypeHandler} compType={this.state.compType}
                  // lockInHandler={this.lockInHandler} lockIn={this.state.lockIn}
                  amountHandler={this.amountHandler} amount={this.state.amount}
                  submitHandler={this.submitHandler}
          />
          <div className="col">
            <Compare amount={this.state.amount} compareList={this.state.compareList}
                        removeHandler={this.removeHandler} index={this.state.index}
            />
            <Calculator />
            <List filtered={this.state.filtered} rates={this.state.rates} filteredRates={this.state.filteredRates}
                  matches={this.state.matches} selectHandler={this.selectHandler} index={this.state.index}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
