import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Index() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(inputs);

    axios
      .post("http://localhost:8080/api/emptime/insert", inputs)
      .then((res) => console.log(res.data), (window.location.href = "/"))
      .catch((err) => console.warn(err));
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Work Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="work_Date"
            value={inputs.work_Date || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Activity</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="activity"
            value={inputs.activity || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Start hours</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Time"
            name="start_Hour"
            value={inputs.start_Hour || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End hours</Form.Label>
          <Form.Control
            type="time"
            name="end_Hour"
            placeholder="Enter Time"
            value={inputs.end_Hour || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Presents</Form.Label>
          <Form.Control
            type="text"
            name="presents"
            placeholder="Enter Present"
            value={inputs.presents || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employe ID</Form.Label>
          <Form.Control
            type="text"
            // disabled
            placeholder="Enter Present"
            name="employee"
            value={inputs.employee || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="d-grid gap-2">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Index;
