import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

function Index() {
  const [timesheet, setTimesheet] = useState([""]);
  const location = useLocation();

  const url = new URL(window.location.href);
  const Id = url.searchParams.get("id");
  console.log(Id + "djhsjdsbjds id");

  useEffect(() => {
    //membaca dari local server
    getdetail();
    console.log("hasillk");
    // console.log(location.id + "fjkbdjkfbbsig");
  });

  const getdetail = () => {
    axios
      .get("http://localhost:8080/api/emptime/getDetail/" + Id)
      .then((res) => {
        setTimesheet(res.data);
        console.log("hasil", res);
      });
  };

  //   const getdetail = (id) => {
  //     axios
  //       .get("")
  //       .then((response) => {
  //         console.log(response.data);
  //         console.log("dget successfully!");
  //       });
  //   };

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-3"> Detail Daily Report </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Work Date</th>
              <th>Activity</th>
              <th>Start Hour</th>
              <th>End Hour</th>
            </tr>
          </thead>
          <tbody>
            {timesheet.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.work_Date}</td>
                  <td>{item.activity}</td>
                  <td>{item.start_Hour}</td>
                  <td>{item.end_Hour}</td>
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
