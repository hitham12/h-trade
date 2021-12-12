import React from 'react';
import Link from './Link';
import * as ReactBootstrap from "react-bootstrap"
import './style.css'
const Header = () => {
    return (
        <div>
            <ReactBootstrap.Navbar  collapseOnSelect expand="lg" bg="" variant="dark">
        <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand href="/Home">Home</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Brand href="/">H-Trade</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Brand href="/Crypto">Crypto</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Brand href="/pricing">pricing</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Brand href="/Pay">Pay</ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="me-auto">
              <ReactBootstrap.Nav.Link href="#features"> </ReactBootstrap.Nav.Link>
{/*               <ReactBootstrap.Nav.Link href="#pricing"><Link className="item" href="/pricing">
                    Pricingggg
                </Link></ReactBootstrap.Nav.Link> */}
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav>
            <ReactBootstrap.Navbar.Brand href="/login"><svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" 
                d="M17.5 9c0 1.14-.3 1.99-.79 2.54-.46.52-1.27.96-2.71.96s-2.25-.44-2.71-.96A3.74 3.74 0 0 1 10.5 9c0-1.14.3-1.99.79-2.54.46-.52 1.27-.96 2.71-.96s2.25.44 2.71.96c.5.55.79 1.4.79 2.54zM19 9c0 2.76-1.45 5-5 5s-5-2.24-5-5 1.45-5 5-5 5 2.24 5 5zm-8 8.5h6c2.04 0 3.1.5 3.76 1.1.69.63 1.11 1.55 1.5 2.8.13.42.04.95-.29 1.4-.33.46-.8.7-1.22.7H7.25c-.43 0-.89-.24-1.22-.7a1.61 1.61 0 0 1-.3-1.4 6.08 6.08 0 0 1 1.51-2.8c.65-.6 1.72-1.1 3.76-1.1zm6-1.5h-6c-4.6 0-5.88 2.33-6.7 4.96-.58 1.89.97 4.04 2.95 4.04h13.5c1.98 0 3.53-2.15 2.95-4.04C22.88 18.33 21.6 16 17 16z" fill="currentColor">
                    </path></svg></ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Brand href="/Register">Register</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Brand class="cart"  href="/market"  ><svg  width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path  d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path><path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path></svg></ReactBootstrap.Navbar.Brand>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
        </div>
    )
}

export default Header;
{/* <Link className="item" href="/">
                    Home
                </Link>
                <Link className="item" href="/pricing">
                    Pricingggg
                </Link> */}
