import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './RejectedByInfluencer.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const RejectedByInfluencer = ()=>{
    const location = useLocation()
    const email = location.state.email

        // e.preventDefault();
    const [rejectedbyinfluencerlist,setrejectedbyinfluencerlist] = useState([])
    const [newrejectbyinfluencerlist, setnewrejectbyinfluencerlist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/clientPendingapprovals", {withCredentials: true}).then(
            (res)=>{
                console.log(res.data)
                setrejectedbyinfluencerlist(res.data)
            }

            ).catch(
                err=>{console.log(err)}
            )
    },[])

    const myfunc = ()=>{
        rejectedbyinfluencerlist.map((val,key)=>{
            if(val.clientEmail === email && val.status ==="Rejected" && val.acceptedByClient === false){
                newrejectbyinfluencerlist[key] = val
            }
        })

    }
    myfunc()
    // shapack();
    return(
        <div>
        {
            <div className='rbi'>
                <h2>Here are your orders rejected by influencers</h2>
                {
                    newrejectbyinfluencerlist.map((val,key)=>{
                        return(
                            <div className='rejectedByInfluencerCard'>
                                <div>
                                    <p>Order ID: {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                    <p>Influencer Email: {JSON.parse(JSON.stringify(val,undefined,3)).influencerEmail}</p>
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
export default RejectedByInfluencer;