import React, { Component } from "react";
import './App.less';
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Admin/>}/>
        </Routes>
      </Router>
    )
  }
}
