import React from 'react';
import { hot } from 'react-hot-loader';

import Filter from './components/filter/filter';
import List from './components/list/list';
import Compare from './components/compare/compare';
import Calculator from './components/calculator/calculator';

import Form from './components/form/form';

import styles from './style.scss';

let amortization = function(amount, rate, term){
  let monthlyRate = rate/12;
  return amount * (monthlyRate/(1-Math.pow(1+monthlyRate, -term)));
}

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
      term: 240,
      matches: 0,
      compareList: [],
      calculateList: [],
      resultList: []
    };
    this.loanTypeHandler = this.loanTypeHandler.bind(this);
    this.rateTypeHandler = this.rateTypeHandler.bind(this);
    this.propTypeHandler = this.propTypeHandler.bind(this);
    this.compTypeHandler = this.compTypeHandler.bind(this);
    // this.lockInHandler = this.lockInHandler.bind(this);
    this.amountHandler = this.amountHandler.bind(this);
    this.termHandler = this.termHandler.bind(this);
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

  termHandler(term){
    this.state.term = term;
    this.setState({term: term});
  }

  selectHandler(index){
    if (this.state.filtered === false && this.state.compareList.length < 2){
      let rates = this.state.rates[index]
      let compareList = this.state.compareList;
      compareList.push(rates);
      this.setState({compareList: compareList});
      
      let amount = this.state.amount;
      let year1_rate = (rates.year1_rate/100);
      let term = this.state.term;
      let monthlyPayment = amortization(amount, year1_rate, term);
      let totalPayment = monthlyPayment * term;
      let calculateList = this.state.calculateList;
      calculateList.push({
        amount: amount,
        year1_rate: rates.year1_rate,
        term: term,
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: totalPayment.toFixed(2)
      });
      this.state.calculateList = calculateList;
      this.setState({calculateList: calculateList});
    
    } else if (this.state.filtered === true && this.state.compareList.length < 2) {
      let filteredRates = this.state.filteredRates[index]
      let compareList = this.state.compareList;
      compareList.push(filteredRates)
      this.setState({compareList: compareList});

      let amount = this.state.amount;
      let year1_rate = (filteredRates.year1_rate/100);
      let term = this.state.term;
      let monthlyPayment = amortization(amount, year1_rate, term);
      let totalPayment = monthlyPayment * term;
      let calculateList = this.state.calculateList;
      calculateList.push({
        amount: amount,
        year1_rate: filteredRates.year1_rate,
        term: term,
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: totalPayment.toFixed(2)
      });
      this.state.calculateList = calculateList;
      this.setState({calculateList: calculateList});
    }
    
  };

  removeHandler(index){
    let compareList = this.state.compareList;
    compareList.splice(index, 1);
    this.setState({compareList: compareList});

    let calculateList = this.state.calculateList;
    calculateList.splice(index, 1);
    this.setState({calculateList: calculateList});
  }

  render() {
      
    return (
      <div className="container">
        <div className={"row " + styles.imgRow}>
        <h4 className={styles.intro}>Intoducing FiMort a.k.a Fianancial Mortgage. An api app to source for market mortgage rates.</h4>
          
          <div className={"col " + styles.imgCol}>
            <img className={"img-fluid " + styles.indexImg} src="https://cdn.pixabay.com/photo/2013/07/26/15/49/money-167735_960_720.jpg" />
            <div className={"overlay " + styles.overlay}>
              <div className={"text "+ styles.text}>Home</div>
            </div>
          </div>
          
          <div className={"col " + styles.imgCol}>
            <img className={"img-fluid "+ styles.indexImg} src="https://www.theadviser.com.au/images/resize/mortgage-house-1-ta_b684.jpg" />
            <div className={"overlay " + styles.overlay}>
              <div className={"text "+ styles.text}>Admin</div>
            </div>
          </div>
          
          
          <div className={"col " + styles.imgCol}>
            <img className={"img-fluid "+ styles.indexImg} src="https://cdn.pixabay.com/photo/2013/07/26/15/48/house-167734_960_720.jpg" />
            <div className={"overlay " + styles.overlay}>
              <div className={"text "+ styles.text}>Disclaimer</div>
            </div>  
          </div>
        
        </div>
        
        <div className="row">
          <Filter loanTypeHandler={this.loanTypeHandler} loanType={this.state.loanType} 
                  rateTypeHandler={this.rateTypeHandler} rateType={this.state.rateType}
                  propTypeHandler={this.propTypeHandler} propType={this.state.propType}
                  compTypeHandler={this.compTypeHandler} compType={this.state.compType}
                  // lockInHandler={this.lockInHandler} lockIn={this.state.lockIn}
                  amountHandler={this.amountHandler} amount={this.state.amount}
                  termHandler={this.termHandler} term={this.state.term}
          />
          <div className="col">
            <Compare amount={this.state.amount} compareList={this.state.compareList} />
            <Calculator amount={this.state.amount} calculateList={this.state.calculateList}
                        removeHandler={this.removeHandler} index={this.state.index}
            />
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
