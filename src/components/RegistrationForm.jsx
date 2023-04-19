import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import './RegistrationForm.css'

function RegistrationForm() {
    const [validated, setValidated] = useState(false);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [num, setNum] = useState("");
     const [date, setDate] = useState("");


     const handleClick = () => {
       localStorage.setItem("name", name);
       localStorage.setItem("email", email);
       localStorage.setItem("Phone number", num);
       localStorage.setItem("date", date);
     };

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    
  
  return (
        <Container >
          <Form
            className="form_box"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <h3 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Registration From</h3>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="mb-3"
            >
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
    
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
    
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Phone Number</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="number"
                    placeholder="Number"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setNum(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a number.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
    
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Date of Birth</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="date"
                    placeholder="Date of birth"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a date.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
    
         <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button onClick={handleClick} variant="primary" type="submit">
                  Submit 
                </Button>
         </div>
          </Form>
        </Container>
  );
}

export default RegistrationForm;
