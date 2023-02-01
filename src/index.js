import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/Components/Page/Layout";
import Home from "../src/Components/Page/Home";
import History from "../src/Components/Page/History";
import Timesheet from "../src/Components/Page/Timesheet";
import Profile from "../src/Components/Page/Profile";
import Daily from "../src/Components/Page/Daily";
import Month from "../src/Components/Page/Month";
import Login from "../src/Components/Page/Login";
import Register from "../src/Components/Page/Register";
import Manager from "../src/Components/Page/Manager";
import Pmo from "../src/Components/Page/Pmo";
import HumanResouce from "../src/Components/Page/HumanResource";
import Detail from "../src/Components/Page/DetailRequest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/timesheet" element={<Timesheet />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/daily" element={<Daily />}></Route>
          <Route path="/Month" element={<Month />}></Route>
        </Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/manager" element={<Manager />}></Route>
        <Route path="/pmo" element={<Pmo />}></Route>
        <Route path="/hr" element={<HumanResouce />}></Route>
        <Route exact path="/detail/" component={Detail} element={<Detail />} />
        {/* <Route path="/detail/id" element={<Detail />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
