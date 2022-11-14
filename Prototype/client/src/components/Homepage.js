import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Homepage = () =>{
    let navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate("/login")}>Login</button>
            <button onClick={()=>navigate("/signupopt")}>signup</button>
        </div>
    )
}
export default Homepage