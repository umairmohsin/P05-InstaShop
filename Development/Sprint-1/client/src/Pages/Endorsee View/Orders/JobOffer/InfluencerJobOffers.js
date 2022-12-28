import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './InfluencerJobOffers.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const InfluencerJobOffers = ()=>{
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
            if(val.influencerEmail === email && val.status === "Pending" && val.acceptedByClient === false){
                newpendlist[key] = val
            }
        })

    }
    myfunc()

    const setStatus1 = async(myID)=>{
        const acceptData = {ans:"Ongoing", email:email, myID:myID}
        // console.log(acceptData)
        await axios.post("http://localhost:8000/changeStatus",acceptData)

    }

    const setStatus2 = async(myID)=>{
        const acceptData = {ans:"Rejected", email:email, myID:myID}
        // console.log(acceptData)
        await axios.post("http://localhost:8000/changeStatus",acceptData)
    }
    
    return(
        <div>
        {
            <div className='ipa'>
                <h2>Here are your job offers received from Clients</h2>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div className='influencerJobOfferCard'>
                                <div>
                                    <p>Order ID: {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                    <p>Client Email: {JSON.parse(JSON.stringify(val,undefined,3)).clientEmail}</p>
                                    <p>Price: PKR{JSON.parse(JSON.stringify(val,undefined,3)).price}</p>
                                    <p>Status: {JSON.parse(JSON.stringify(val,undefined,3)).status}</p>
                                </div>

                                <button onClick={()=>{setStatus1(val.orderID)}}>Accept</button> 
                                <button onClick={()=>{setStatus2(val.orderID)}}>Reject</button>
                            </div>
                        )
                    })
                }
            </div>
        }
        </div>
    )
}


export default InfluencerJobOffers;