# React Ethereum DApp Boilerplate

## Stack

* [Create React App](https://github.com/facebookincubator/create-react-app)
* Redux
* React Router

## Set up

First, you need Truffle.

* To install, run: `npm install -g truffle`

Then, you need access to a test network. Here, two ways to do it are described. Also, you can set up [MetaMask](https://metamask.io) in your browser to use the network that is being used

### Ganache CLI

[Ganache CLI](https://github.com/trufflesuite/ganache-cli) is part of the Truffle suite.

* To install, run: `npm install -g ganache-cli`
* Run `ganache-cli`

### Go Ethereum

[Go Ethereum](https://github.com/ethereum/go-ethereum) is the Official golang implementation of the Ethereum protocol. For installation and test network information, read the documentation at the official wiki.

## Commands

* Compile: `truffle compile`
* Migrate: `truffle migrate`
* Test contracts: `truffle test`
* Run dev server: `npm start`
* Run testrpc: `testrpc`
* Build for production: `npm run build`

## Deploying contracts

To compile and deploy contracts to the simulated network, run the following commands in /src directory:

* Run `truffle compile`
* Run `truffle migrate`

## Example code

The example code does the following:

1.  Initialize the contract and set its provider

2.  Get the current block number from the network and display it

3.  Get a list of accounts from the network

4.  Get balances per account from the contract and display them
