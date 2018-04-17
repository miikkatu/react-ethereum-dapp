import React, { Component } from 'react';
import Contract from 'truffle-contract';

import ethereum from '../../assets/images/ethereum.svg';
import react from '../../assets/images/react.svg';

import MetaCoinArtifact from '../../build/contracts/MetaCoin.json';

import {
  fixTruffleContractCompatibilityIssue,
  getCurrentProvider,
  default as web3
} from '../../web3';

class MainView extends Component {
  constructor(props) {
    super(props);

    // Initialize contract instance and set its provider
    let metaCoinInstance = Contract(MetaCoinArtifact);
    metaCoinInstance.setProvider(getCurrentProvider());
    metaCoinInstance = fixTruffleContractCompatibilityIssue(metaCoinInstance);

    this.state = {
      accounts: [],
      blockNumber: web3.eth.blockNumber,
      metaCoinInstance
    };
  }

  componentDidMount = () => {
    this.getAccountBalances();

    web3.eth.getBlockNumber().then(block => {
      this.setState({ blockNumber: block });
    });
  };

  getAccountBalance = account => {
    return this.state.metaCoinInstance
      .deployed()
      .then(metaCoin => {
        return metaCoin.getBalance.call(account, { from: account });
      })
      .then(value => {
        return { account: value.valueOf() };
      })
      .catch(e => {
        console.log(e);
        throw e;
      });
  };

  getAccountBalances = () => {
    web3.eth.getAccounts((error, accounts) => {
      if (error !== null) {
        console.error(error);
        return;
      }

      const accountsAndBalances = accounts.map(account => {
        return this.getAccountBalance(account).then(balance => {
          return { account, balance };
        });
      });

      Promise.all(accountsAndBalances).then(accountsAndBalances => {
        this.setState({
          accounts: accountsAndBalances
        });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={react} className="logo" alt="React" />
          <img src={ethereum} className="logo" alt="Ethereum" />
          <h1 className="title">React Ethereum DApp</h1>
        </header>
        <section>
          <div className="heading">Current block: {this.state.blockNumber}</div>
        </section>
        <section className="accounts">
          {this.state.accounts.length > 0 && (
            <div>
              <div className="account">
                <div>Account</div>
                <div>Balance</div>
              </div>
              {this.state.accounts.map(account => {
                return (
                  <div className="account" key={account.account}>
                    <div>{account.account}</div>
                    <div className="balance">{account.balance.account}</div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default MainView;
