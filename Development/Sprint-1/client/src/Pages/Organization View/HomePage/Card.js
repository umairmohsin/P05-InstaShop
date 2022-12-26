import React, { Component } from "react";
import './Card.css'


const ProfileCards = (props) => {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <p className="title">{props.niche}</p>
            <p>{props.rating}</p>
            <p><button>View Profile</button></p>
        </div>
    ); 
}

export default ProfileCards;

{/* <h1>John Doe</h1>
<p className=""="title">CEO & Founder, Example</p>
<p>Harvard University</p>
<p><button>View Profile</button></p> */}
