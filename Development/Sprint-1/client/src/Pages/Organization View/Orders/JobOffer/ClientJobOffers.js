import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ClientJobOffers.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const ClientJobOffers = ()=>{
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
            if(val.clientEmail === email && val.status ==="Pending" && val.acceptedByClient === false){
                newpendlist[key] = val
            }
        })

    }
    myfunc()
    
    return(
        <div>
        {
            <div className='ipa'>
                <h2>Here are your job offers received from Clients</h2>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div className='clientJobOfferCard'>
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


export default ClientJobOffers;