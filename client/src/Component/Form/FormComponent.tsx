import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

function FormComponent() {
  return (
    <div>
      <Form className="mx-auto w-50" method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button className="border " variant="red" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
