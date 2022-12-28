import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './InfluencerPendingApprovals.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const InfluencerApprovalsPending = ()=>{
    const location = useLocation()
    const email = location.state.email

        // e.preventDefault();
    const [pendinglist,setpendinglist] = useState([])
    const [newpendlist, setnewpendlist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/influencerpendingapprovals").then(
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
            if(val.influencerEmail === email && val.status ==="Completed" && val.acceptedByClient === false){
                newpendlist[key] = val
            }
        })

    }
    myfunc()
    // shapack();
    return(
        <div>
        {
            <div className='ipa'>
                <h2>Here are your orders pending approval by client</h2>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div className='influencerpendingapprovalcard'>
                                <div>
                                    <p>Order ID: {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                    <p>Client Email: {JSON.parse(JSON.stringify(val,undefined,3)).clientEmail}</p>
                                    <p>Price: PKR{JSON.parse(JSON.stringify(val,undefined,3)).price}</p>
                                    <p>Status: {JSON.parse(JSON.stringify(val,undefined,3)).status}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        }
        </div>
    )
}
export default InfluencerApprovalsPending;