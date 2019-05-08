const HDWalletprovider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const compiledVoting = require('./build/Voting.json');

const provider = new HDWalletprovider( 'elbow argue outside stove exercise velvet token atom tuition imitate beach neglect' , 'https://rinkeby.infura.io/v3/1a5c3ae2a13643c883dcecd1e9bb3759' );

const web3 = new Web3(provider);

const deploy = async () => {
 
 const accounts = await web3.eth.getAccounts();
 
 console.log('Attempting to delpoy from account',accounts[0]);

 const result = await new web3.eth.Contract(JSON.parse(compiledVoting.interface))
   .deploy({ data:compiledVoting.bytecode })
   .send({ gas: '1000000',from: accounts[0]   });

 // console.log(interface);
  console.log('Contract deployed to' , result.options.address);

};
deploy();

