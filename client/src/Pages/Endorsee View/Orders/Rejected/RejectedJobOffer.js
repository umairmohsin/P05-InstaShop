import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './RejectedJobOffer.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const RejectedJobOffer = ()=>{
    const location = useLocation()
    const email = location.state.email

        // e.preventDefault();
    const [rejectedjobofferlist,setrejectedjobofferlist] = useState([])
    const [newrejectjobofferlist, setnewrejectjobofferlist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/clientPendingapprovals", {withCredentials: true}).then(
            (res)=>{
                console.log(res.data)
                setrejectedjobofferlist(res.data)
            }

            ).catch(
                err=>{console.log(err)}
            )
    },[])

    const myfunc = ()=>{
        rejectedjobofferlist.map((val,key)=>{
            if(val.influencerEmail === email && val.status ==="Rejected" && val.acceptedByClient === false){
                newrejectjobofferlist[key] = val
            }
        })

    }
    myfunc()
    // shapack();
    return(
        <div>
        {
            <div className='rjo'>
                <h2>Here are the orders you have rejected</h2>
                {
                    newrejectjobofferlist.map((val,key)=>{
                        return(
                            <div className='rejectedjobofferCard'>
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
export default RejectedJobOffer;