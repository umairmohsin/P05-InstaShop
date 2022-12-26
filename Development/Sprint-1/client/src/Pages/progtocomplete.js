import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const Completed = ()=>{
        // e.preventDefault();
    const [don,setdon] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/read").then(
            (res)=>{
                console.log(res.data)
                setdon(res.data)
            }

            ).catch(
                err=>{console.log(err)}
            )
    },[])
    // shapack();
    return(
        <div>
        hello  boss howsat
        {
            don.map((val)=>{
                return <div>{JSON.stringify(val,undefined,3)}</div>
            })
        }
        </div>
    )
}
export default Completed;