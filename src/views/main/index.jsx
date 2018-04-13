import React, { Component } from 'react';
import { default as Web3 } from 'web3';

import ethereum from '../../assets/images/ethereum.svg';
import react from '../../assets/images/react.svg';

class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blockNumber: ''
    };

    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
    web3.eth
      .getBlockNumber()
      .then(block => this.setState({ blockNumber: block }));
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={react} className="logo" alt="React" />
          <img src={ethereum} className="logo" alt="Ethereum" />
          <h1 className="title">React Ethereum DApp</h1>
        </header>
        <p className="intro">
          Current block number is {this.state.blockNumber}
        </p>
      </div>
    );
  }
}

export default MainView;
