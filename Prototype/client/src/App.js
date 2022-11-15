import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Landing from "./Pages/Landing/landing";
import Login from "./Pages/Signin/login";
import Signup from "./Pages/SignUp/signup";
import Osignup from "./Pages/SignUp/osignup";
import Esignup from "./Pages/SignUp/esignup";
import Announce from "./Pages/Admin/Announcement/announce";
import EditOrgProfile from "./Pages/Organization View/My Profile/EditOrganization";
import EditEndorseeProfile from "./Pages/Endorsee View/My Profile/EditEndorsee";
import EditAdminProfile from "./Pages/Admin/My Profile/EditAdmin";
import Eprofile from "./Pages/Organization View/Endorsee Profile/Eprofile";
import TestCard from "./Pages/Organization View/Endorsee Profile/testcard";
import SignUp from "./Pages/SignUp/signup";
import ChangePass from "./Pages/Misc/Change Pass/ChangePass";

const App = ()=>{
  return(
    <div>
      <Router>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={(<ChangePass/>)}/> */}
          <Route path="/" element={(<Login />)}/>
          <Route path="/signup" element={(<Signup />)}/>
          <Route path="/signuporg" element={(<Osignup />)}/>
          <Route path="/signupend" element={(<Esignup />)}/>
        </Routes>
      </Router>
    </div>
  )

}

export default App;