import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import dataService from "../../Service/service";
import axios from "axios";

function Index() {
  const [timesheet, setTimesheet] = useState([""]);
  useEffect(() => {
    //membaca dari local server
    getData();
    console.log("hasillk");
  }, []);

  //mendapatkan data katalogo
  const getData = () => {
    axios.get("http://localhost:8080/api/timesheet/").then((res) => {
      setTimesheet(res.data);
      console.log("hasil", res);
    });
  };

  return (
    <>
      <Container className="mt-3">
        <Link to="/month" className="btn btn-primary mb-2">
          Add Request
        </Link>
        {""}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Remarks</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {timesheet.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.projectName}</td>
                  <td>{item.remarks}</td>
                  {/* <td>
                    <Badge bg="danger">Delete</Badge>{" "}
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Index;
