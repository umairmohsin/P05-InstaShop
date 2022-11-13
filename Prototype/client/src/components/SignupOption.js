import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const SignupOpt = () =>{
    let navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate("/signuporg")}>Organization</button>
            <button onClick={()=>navigate("/signup")}>Endorser</button>
        </div>
    )
}
export default SignupOpt