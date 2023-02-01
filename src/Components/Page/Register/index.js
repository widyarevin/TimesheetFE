import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import dataService from "../../Service/service";
import React from "react";
import axios from "axios";

const Index = () => {
  const [inputs, setInputs] = useState({});
  const [designation, setDesignation] = useState({});

  useEffect(() => {
    //membaca dari local server
    getData();
    console.log("hasillk");
  }, []);

  //mendapatkan data katalogo
  const getData = async () => {
    await axios.get("http://localhost:8080/api/designation").then((res) => {
      setDesignation(res.data);
      console.log("hasil", res);
    });
  };

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
      .post("http://localhost:8080/api/userM/registerDTO", inputs)
      .then((res) => console.log(res.data), (window.location.href = "/login"))
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center">Form Registrasi</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>NIK</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter NIK"
              name="nik"
              value={inputs.nik || ""}
              onChange={handleChange}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>designation</Form.Label> */}

          {/* <Form.Control
              type="number"
              placeholder="Enter Disignitaion"
              name="designation"
              value={inputs.designation || ""}
              onChange={handleChange}
            />
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              type="date"
              name="birthdate"
              placeholder="Enter Birthdate"
              value={inputs.birthdate || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation </Form.Label>
            <Form.Select name="designation" onChange={handleChange}>
              {designation.map((item) => {
                return <option value={item.id}>{item.nama}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <input type="submit" className="btn btn-primary" />
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Container>
    </>
  );
};

export default Index;
