import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ClientPendingApprovals.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const ClientApprovalsPending = ()=>{
    const location = useLocation()
    const email = location.state.email

        // e.preventDefault();
    const [pendinglist,setpendinglist] = useState([])
    const [newpendlist, setnewpendlist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/clientPendingapprovals").then(
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
            if(val.clientEmail === email && val.status ==="Completed" && val.acceptedByClient === false){
                newpendlist[key] = val
            }
        })

    }
    myfunc()
    const setAccepted = async(myID)=>{
        const acceptData = {ans:true, email:email, myID:myID}
        // console.log(acceptData)
        await axios.post("http://localhost:8000/changeAccepted",acceptData)

    }
    const setStatus = async(myID)=>{
        const acceptData = {ans:"Ongoing", email:email, myID:myID}
        // console.log(acceptData)
        await axios.post("http://localhost:8000/changeStatus",acceptData)

    }
    // shapack();
    return(
        <div>
        {
            <div className='ipa'>
                <h2>Here are your orders pending approval by client</h2>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div className='clientPendingApprovalCard'>
                                <div>
                                    <p>Order ID: {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                    <p>Client Email: {JSON.parse(JSON.stringify(val,undefined,3)).clientEmail}</p>
                                    <p>Price: PKR{JSON.parse(JSON.stringify(val,undefined,3)).price}</p>
                                    <p>Status: {JSON.parse(JSON.stringify(val,undefined,3)).status}</p>
                                </div>

                                <button onClick={()=>{setAccepted(val.orderID)}}>Accept</button> 
                                <button onClick={()=>{setStatus(val.orderID)}}>Reject</button>
                            </div>
                        )
                    })
                }
            </div>
        }
        </div>
    )
}


export default ClientApprovalsPending;