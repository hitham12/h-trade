// import React from react;
import Main from './components/Main';
import './App.css';
import * as ReactBootstrap from "react-bootstrap"


function App() {
  return (
    <div className="app1">
      {/* <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">H-Trade</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="me-auto">
              <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/pricing">Pricing</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav>
              <ReactBootstrap.Nav.Link href="#deets" image='.'>More deets</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar> */}


      <Main />
    </div>
  );
}

export default App;
