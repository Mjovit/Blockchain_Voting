import web3 from './web3';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0x702F56Cc5E9F340b4C232BBC3ab114D0031E560E'
);

export default instance;