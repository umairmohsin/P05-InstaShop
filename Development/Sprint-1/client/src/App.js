import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Landing from "./Pages/Landing/landing";
import Login from "./Pages/Signin/login";
import Signup from "./Pages/SignUp/signup";
import Orgsignup from "./Pages/SignUp/Orgsignup";
import Endsignup from "./Pages/SignUp/Endsignup";
import Announce from "./Pages/Admin/Announcement/announce";
import EditOrgProfile from "./Pages/Organization View/My Profile/EditOrganization";
import EditEndorseeProfile from "./Pages/Endorsee View/My Profile/EditEndorsee";
import EditAdminProfile from "./Pages/Admin/My Profile/EditAdmin";
import Eprofile from "./Pages/Organization View/Endorsee Profile/Eprofile";
import TestCard from "./Pages/Organization View/Endorsee Profile/testcard";
import SignUp from "./Pages/SignUp/signup";
import ChangePass from "./Pages/Misc/Change Pass/ChangePass";
import HomePage from "./Pages/Organization View/HomePage/Homepage";
import Completed from "./Pages/progtocomplete";
import ApprovalsPending from "./Pages/clientpendingapprovals";
import CompleteOrderList from "./Pages/completed";

const App = ()=>{
  return(
    <div>
      <Router>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={(<ChangePass/>)}/> */}
          <Route path="/" element={(<Landing />)}/>
          <Route path="/login" element={(<Login />)}/>
          <Route path="/signup" element={(<Signup />)}/>
          <Route path="/signuporg" element={(<Orgsignup />)}/>
          <Route path="/signupend" element={(<Endsignup />)}/>
          <Route path="/ChangePass" element={(<ChangePass />)}/>
          <Route path="/EditAdmin" element={(<EditAdminProfile />)}/>
          <Route path="/EditEndorsee" element={(<EditEndorseeProfile />)}/>
          <Route path="/announce" element={(<Announce />)}/>
          <Route path="/adminprofile" element={(<EditAdminProfile />)}/>
          <Route path="/home" element={(<HomePage />)}/>
          <Route path="/read" element={(<Completed />)}/>
          <Route path="/pendingapprovals" element={(<ApprovalsPending />)}/>
          <Route path="/completedorders" element={(<CompleteOrderList />)}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;