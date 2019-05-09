import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Voting from '../../ethereum/voitng';

class Winner extends Component {
    static async getInitialProps(props){
        const win = await Voting.methods.winner().call();
        return{win};
    }
    render() {
        const pStyle = {
            fontSize: '40px',
            textAlign: 'center'
          };
        return (
            <Layout>
            <div>
           
            <p style={pStyle}>Congratulation!!</p>
            <p style={pStyle}> The Winner is {this.props.win[0]} with {this.props.win[1]} votes.</p>
            </div>
            </Layout>

            
        );
    }
}

export default Winner;