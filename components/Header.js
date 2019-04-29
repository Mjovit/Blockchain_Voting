import React from 'react';
import { Menu ,Segment} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Segment inverted>
        <Menu inverted pointing secondary>
            <Link route="../dashboard">
                <a className="item">Evote</a>
            </Link>



            <Menu.Menu position = "right">
            <Link route="/">
                <a className="item">logout</a>
            </Link>

                
            </Menu.Menu>
        </Menu>
        </Segment>

    );
}