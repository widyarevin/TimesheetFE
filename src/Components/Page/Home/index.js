import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import axios from "axios";

function Index() {
  const [daily, setDaily] = useState([""]);
  useEffect(() => {
    //membaca dari local server
    getData();
    console.log("hasillk");
  }, []);

  //mendapatkan data katalogo
  const getData = () => {
    axios.get("http://localhost:8080/api/emptime/emptmdto").then((result) => {
      setDaily(result.data);
      console.log("hasil", result);
    });
  };

  //   reject
  const deletee = (id) => {
    axios.delete("http://localhost:8080/api/emptime/" + id).then(() => {
      getData();
      console.log("Delete successfully!");
    });
  };

  return (
    <>
      <Container className="mt-3">
        <Link to="/daily" className="btn btn-primary mb-2">
          Add Request
        </Link>
        {""}
        <h2 className="text-center"> Daily Report </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Work Date</th>
              <th>Activity</th>
              <th>Start Hour</th>
              <th>End Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {daily.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.work_Date}</td>
                  <td>{item.activity}</td>
                  <td>{item.start_Hour}</td>
                  <td>{item.end_Hour}</td>
                  <td>
                    <div
                      onClick={() => {
                        deletee(item.id);
                      }}
                    >
                      <Badge bg="danger">Delete</Badge>{" "}
                    </div>
                  </td>
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
