import './App.css';
import {Navbar, Container, Nav, Card} from 'react-bootstrap'
import dp from './img/dp.png'



function App() {
  return (
    <div className="App">  
        <header>
            <Navbar collapseOnSelect expand="lg" variant='dark' >
                  <Container>
                      <Navbar.Brand className='nav-brand' href="#home">Kinishinai</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="me-auto"/>
                          <Nav>
                              <Nav.Link className="nav-links" href="#home">home</Nav.Link>
                              <Nav.Link className="nav-links" href="#about" >about</Nav.Link>
                              <Nav.Link className="nav-links" href="#contact" >contact</Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
            </Navbar>
        </header>


        <section id='home' className='mt-4' style={{display: "flex", alignItems: 'center', justifyContent: 'center', }}>
            <Card className='sheet' style={{ width: '50rem'}} >
                <div>
                    <div className="dp-image">
                        <img src={dp} alt="profilepicture"/>
                    </div>
            
                    <div className="text-center fs-2">
                        <div className="dp-name">
                            <p>Junie Cala Delos Reyes</p>
                        </div>
                        <div className="dp-introduction fs-4">
                            <p className='text-break ps-4 pe-4'>I'm a Programmer, at wala akong maisip kung anong ilalagay ko dito</p>
                        </div>
                    </div>
                </div>
              </Card>
        </section>  
    </div>
  );
}

export default App;
