import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Heading from "./Heading";

function NavScrollExample(props) {
    const clickHandler = () => {
        if (props.buttonName === "Create New admin") {
          props.popUp(1);
        }
        if (props.buttonName === "Create New Coupon") {
          props.popUp(1);
        }
      };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <div className="d-flex align-items-center">
            <div
              style={{
                height: 25,
                width: 25,
                backgroundColor: "#989797",
                marginRight: 10,
              }}
            ></div>
            <Heading name="Company name" marginLeft={0} marginRight={0} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          {props.buttonFlag && (
                <div className="col-lg-4 col-md-5" onClick={clickHandler}>
                  <Button
                    name={props.buttonName}
                    height="30px"
                    width="100%"
                    borderRadius="10px"
                  />
                </div>
              )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
