import axios from "axios";
import React, { useState } from "react";
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

    // app.options("/*", (_, res) => {
    //   res.sendStatus(200);
    // });

    axios
      .post("http://localhost:8080/api/timesheet/insert", inputs)
      .then(
        (res) => console.log(res.data),
        (window.location.href = "/timesheet")
      )
      .catch((err) => console.warn(err));
  };

  // const getCurrentUser = async function () {
  //   const currentUser = await Parse.User.current();
  //   // Update state variable holding current user
  //   setCurrentUser(currentUser);
  //   return currentUser;
  // };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Month</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Month"
            name="project_Name"
            value={inputs.project_Name || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Remarks"
            name="remarks"
            value={inputs.remarks || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Employee Id"
            name="employee_id"
            value={inputs.employee_id || ""}
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
