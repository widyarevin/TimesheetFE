import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
function Index() {
  const [history, setHistory] = useState([""]);
  useEffect(() => {
    //membaca dari local server
    getData();
    console.log("hasillk");
  }, []);

  //mendapatkan data katalogo
  const getData = () => {
    axios.get("http://localhost:8080/api/status/history").then((res) => {
      setHistory(res.data);
      console.log("hasil", res);
    });
  };

  return (
    <>
      <Container className="mt-3">
        <h2 className="mb-3">History Aplikasi</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Timesheet Month</th>
              <th>Status</th>
              <th>Date </th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.project_name}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
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
