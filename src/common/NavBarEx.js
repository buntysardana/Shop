import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from './Button';
import searchicon from '../Assets/search_icon.png';

function NavBarEx(props) {
    const clickHandler = () => {
        if (props.buttonName === "Create New admin") {
            props.popUp(1)
        }
        if (props.buttonName === "Create New Coupon") {
            props.popUp(1)
        }
        if (props.buttonName === "Create Notification") {
            props.popUp(1)
        }
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                

                    </Nav>
                    
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        
                        <div className='d-flex  flex-md-row flex-sm-row justify-content-end'>
                            <div className="position-relative">
                                <img src={searchicon} style={{ position: 'absolute', top: '20%', left: '10px' }} />
                                <input
                                    type="text"
                                    style={{
                                        marginRight: '20px',
                                        width: '90%',
                                        backgroundColor: '#E9E4E4',
                                        paddingLeft: 50,
                                        borderRadius: 10,
                                        border: '2px solid #8C8C8C',
                                        outline: 'none',
                                    }}
                                />
                            </div>
                            {props.buttonFlag && <div onClick={clickHandler}>
                                <Button
                                    name={props.buttonName}
                                    height="30px"
                                    width="100%"
                                    borderRadius="10px"
                                />
                            </div>}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarEx;
