import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const InfluencerCompleteOrderList = ()=>{
    const location = useLocation()
    const email = location.state.email

        // e.preventDefault();
    const [pendinglist,setpendinglist] = useState([])
    const [newpendlist, setnewpendlist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/influencercompletedorders").then(
            (res)=>{
                console.log(res.data)
                setpendinglist(res.data)
            }

            ).catch(
                err=>{console.log(err)}
            )
    },[])

    const myfunc = ()=>{
        pendinglist.map((val,key)=>{
            if(val.influencerEmail === email && val.status ==="Completed" && val.acceptedByClient === true){
                newpendlist[key] = val
            }
        })

    }
    myfunc()
    // shapack();
    return(
        <div>
        hello  boss howsat
        {
            <div>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div>{JSON.stringify(val,undefined,3)}</div>
                        )
                    })
                }
            </div>
        }
        </div>
    )
}
export default InfluencerCompleteOrderList;