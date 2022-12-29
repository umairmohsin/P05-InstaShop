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

import ClientJobOffers from "./Pages/Organization View/Orders/JobOffer/ClientJobOffers"
import ClientOngoingOrders from "./Pages/Organization View/Orders/Ongoing/ClientOngoingOrders"
import ClientApprovalsPending from "./Pages/Organization View/Orders/Pending/ClientPendingApprovals";
import ClientCompleteOrderList from "./Pages/Organization View/Orders/Completed/ClientCompletedOrders";
import RejectedByInfluencer from "./Pages/Organization View/Orders/Rejected/RejectedByInfluencer"

import InfluencerJobOffers from "./Pages/Endorsee View/Orders/JobOffer/InfluencerJobOffers"
import InfluencerOngoingOrders from "./Pages/Endorsee View/Orders/Ongoing/InfluencerOngoingOrders";
import InfluencerApprovalsPending from "./Pages/Endorsee View/Orders/Pending/InfluencerPendingApprovals";
import InfluencerCompleteOrderList from "./Pages/Endorsee View/Orders/Completed/InfluencerCompletedOrders";
import RejectedJobOffer from "./Pages/Endorsee View/Orders/Rejected/RejectedJobOffer"


import RatingList from "./Pages/Organization View/Orders/Completed/RatingComp";
// import StarRating from "./Pages/Organization View/Orders/Completed/StarRating";

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
          
          <Route path="/clientJobOffers" element={(<ClientJobOffers />)}/>
          <Route path="/clientOngoingOrders" element={(<ClientOngoingOrders />)}/>
          <Route path="/clientPendingapprovals" element={(<ClientApprovalsPending />)}/>
          <Route path="/clientCompletedorders" element={(<ClientCompleteOrderList />)}/>
          <Route path="/clientRejectedOrders" element={(<RejectedByInfluencer />)}/>

          <Route path="/influencerJobOffers" element={(<InfluencerJobOffers />)}/>
          <Route path="/influencerOngoingOrders" element={(<InfluencerOngoingOrders />)}/>
          <Route path="/influencerPendingApprovals" element={(<InfluencerApprovalsPending />)}/>
          <Route path="/influencerCompletedOrders" element={(<InfluencerCompleteOrderList />)}/>
          <Route path="/influencerRejectedOrders" element={(<RejectedJobOffer />)}/>

          <Route path="/clientRatings" element={(<RatingList />)}/>

        </Routes>
      </Router>     

       {/* <StarRating />  */}

    </div>

  )
}
export default App;