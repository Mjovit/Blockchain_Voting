import React, { Component } from 'react';
import { Header, Menu, Segment } from 'semantic-ui-react';
import voting from '../ethereum/voitng';
import Layout from '../components/Layout';
import { Link } from '../routes';

class VotingIndex extends Component {
        
    
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
    
   render() {
    
   
    const { activeItem } = this.state

    return (
        <Layout>
        <div  style={{ marginBottom: 60}}>
      <Segment inverted>
      <Menu vertical inverted pointing secondary >
      <Link route="/evote/vote">
            <a className="item">Vote</a>
      </Link>

      <Link route="/evote/candidates">
            <a className="item">Candidate list</a>
      </Link>


      </Menu>
      </Segment>
       
     
       </div>
       </Layout>
    )
    
  }
}
export default VotingIndex;