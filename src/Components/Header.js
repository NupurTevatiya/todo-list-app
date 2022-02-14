import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FcApproval } from "react-icons/fc";
import './header.css';
const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand>
  <h1 className='app'>
       ToDo List App <FcApproval /> 
  </h1>
  </Navbar.Brand>
</Container>
</Navbar>
    );
}
export default Header;
