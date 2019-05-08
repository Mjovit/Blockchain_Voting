import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button ,Input ,Message} from 'semantic-ui-react';
import Voting from '../../ethereum/voitng';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';


class Winner extends Component {
    static async getInitialProps(props){
        const win = await Voting.methods.winner().call();
        return{win};
    }
    render() {
        
        return (
            <Layout>
            <h3>Candidate Lists</h3>
           
            <div>Congratulation!!</div>
            <div> The Winner is {this.props.win[0]} with {this.props.win[1]} votes.</div>
            </Layout>

            
        );
    }
}

export default Winner;