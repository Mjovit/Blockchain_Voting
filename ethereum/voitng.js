import web3 from './web3';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0xbA9A05065796F18AdF559a7829e8CeA9D604952C'
);

export default instance;