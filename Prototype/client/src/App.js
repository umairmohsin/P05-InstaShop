// import logo from './logo.svg';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupOrg from './components/SignupOrg';
import Homepage from './components/Homepage';
import SignupOpt from './components/SignupOption';
import Announce from './components/Announce';
const App = ()=>{
  return(
    <div>
      {/* <Login /> */}
      <Router>
        <Routes>
        <Route path="/" element={(<Homepage />)}/>
          <Route path="/login/" element={(<Login />)}/>
          <Route path="/signup/" element={(<Signup />)}/>
          <Route path="/signuporg/" element={(<SignupOrg />)}/>
          <Route path="/signupopt/" element={(<SignupOpt />)}/>
          <Route path="/announce/" element={(<Announce />)}/>
        </Routes>
      </Router>
    </div>
  )

}

export default App;
