import Form from 'react-bootstrap/Form'
import React, {SyntheticEvent} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const handleSubmit = (event: SyntheticEvent) => {
    console.log(event)
};

const Contact = () => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control placeholder={"First name"}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder={"Last name"}/>
                    </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button type={"submit"}>Submit</Button>
            </Form>

        </div>
    );
};
export default Contact
