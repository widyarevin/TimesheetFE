import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  Image,
  For,
  Table,
  Badge,
  Form,
  Button,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Index() {
  const [timesheet, setTimesheet] = useState([""]);
  //   const [id] = useState();
  useEffect(() => {
    //membaca dari local server
    getData();
    console.log("hasillk");
  }, []);

  //mendapatkan data katalogo
  const getData = () => {
    axios.get("http://localhost:8080/api/status/getrequest").then((res) => {
      setTimesheet(res.data);
      console.log("hasil", res);
    });
  };

  //   approve
  // approve with Axios
  const approve = (id) => {
    axios
      .put("http://localhost:8080/api/status/approve/" + id)
      .then((response) => {
        getData();
        console.log("Aprover successfully!");
      });
  };

  //   reject
  const reject = (id) => {
    axios
      .put("http://localhost:8080/api/status/reject/" + id)
      .then((response) => {
        getData();
        console.log("Aprover successfully!");
      });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home Manager</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h2 className="text-center">Data Request</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Employee Name</th>
              <th>Remarks</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {timesheet.map((item) => {
              if (item.status_name === "Request") {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.project_name}</td>
                    <td>{item.status_name}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.remarks}</td>
                    <td>{item.date}</td>
                    <td>
                      <div>
                        <Badge bg="primary">
                          <Link
                            to={
                              "http://localhost:3000/detail/?id=" +
                              item.id_timesheet
                            }
                            className="text-white"
                          >
                            Detail
                          </Link>
                        </Badge>{" "}
                      </div>

                      <div
                        onClick={() => {
                          approve(item.id);
                        }}
                      >
                        <Badge bg="success">Approve</Badge>{" "}
                      </div>
                      <div
                        onClick={() => {
                          reject(item.id);
                        }}
                      >
                        <Badge bg="danger">Reject</Badge>{" "}
                      </div>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </Container>
      <Outlet />
    </>
  );
}

export default Index;
