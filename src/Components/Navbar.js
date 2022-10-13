import React from 'react';
import {Menu,Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu inverted>
        <Container>
         <Link to = '/people'>
         <Menu.Item name='People'/>
         </Link>   
         <Link to = '/people-details'>
         <Menu.Item name='People Detail'/>         
         </Link>   
        </Container>
    </Menu>
  )
}

