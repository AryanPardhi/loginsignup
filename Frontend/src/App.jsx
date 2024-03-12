import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Components/signup'
import Login from './Components/login'
import Landing from './Components/landing'
import StdDashboard from './Pages/stdDashboard';
import CompanyDashboard from './Pages/companyDashboard'

const App = () => {
  return (
    <>
      <Router>
          <div className="">
            <Routes>
              <Route element={<Landing />} exect path="/" />
              <Route element={<StdDashboard />} exect path="/stdDashboard" />
              <Route element={<CompanyDashboard />} exect path="/companyDashboard" />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
            </Routes>
          </div>
        </Router>
    </>
  )
}

export default App
