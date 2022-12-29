import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './ClientCompletedOrders.css'

import axios from 'axios'
import { useState } from 'react'
// const shapack = require('./database/Schema/Announcement')
// const shapack = require("../../../server/database/Schema/Announcement")
const ClientCompleteOrderList = ()=>{
    const location = useLocation()
    const email = location.state.email
    const role = location.state.role

    // const [rating, setRating] = useState(0);
    // const [hover, setHover] = useState(0);

    // e.preventDefault();
    const [pendinglist,setpendinglist] = useState([])
    const [newpendlist, setnewpendlist] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/clientCompletedorders").then(
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
            if(val.clientEmail === email && val.status ==="Completed" && val.acceptedByClient === true){
                newpendlist[key] = val
            }
        })

    }
    myfunc()
    // shapack();
    const SetRating = async(myID)=>{
        const acceptData = {ans:true, email:email, myID:myID } 
        await axios.post("http://localhost:8000/RatingAccepted",acceptData)
        console.log(myID)
    }
    const api_url = "http://localhost:8000/GetRatingClient";

    async function GetRatingDB(url){
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        }
    GetRatingDB(api_url);

    const sendRating = async(myrating)=>{

    if(location.state.role ==="Client"){
        const acceptData ={ email:email,  myrating: myrating} 
        // console.log(acceptData);
        await axios.post("http://localhost:8000/RatingsSend" , acceptData);
    }
    else if(location.state.role ==="Influencer"){
        const acceptData ={ email:email,  myrating: myrating} 
        console.log("is it over here ?");
        await axios.post("http://localhost:8000/RatingsSendInfluencer" , acceptData);
    }
}


    return(
        <div>
        {
            <div className='ico'>
                <h2>Here are your completed orders</h2>
                {
                    newpendlist.map((val,key)=>{
                        return(
                            <div className='clientCompletedOrderCard'>
                                <div>
                                    <p>Order ID: {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                    <p>Client Email: {JSON.parse(JSON.stringify(val,undefined,3)).clientEmail}</p>
                                    <p>Price: PKR{JSON.parse(JSON.stringify(val,undefined,3)).price}</p>
                                    <p>Status: {JSON.parse(JSON.stringify(val,undefined,3)).status}</p>

                                    {/* <p>Rating Backend: {GetRatingDB}</p> */}
                                    {/* SendRating pass values to check if updated in DB  */}
                                    <br></br>
                                    <button onClick={sendRating} type="radio" name="stars" value="1">1 </button>
                                    <button onClick={sendRating} type="radio" name="stars" value="2">2 </button>
                                    <button onClick={sendRating} type="radio" name="stars" value="3">3 </button>
                                    <button onClick={sendRating} type="radio" name="stars" value="4">4 </button>
                                    <button onClick={sendRating} type="radio" name="stars" value="5">5 </button>

                                    <button onClick={()=>{SetRating(val.orderID)}}>Click here after Rating selected !!!</button> 
                                    <br></br>
                                    Adding Stars method <br></br>
                                    {/* <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span>
                                    <span className="star">&#9733;</span> */}
                                    {/* <div className="star-rating">
                                    {[...Array(5)].map((star, index) => {
                                        index += 1;
                                        return (
                                        <button
                                            type="button"
                                            key={index}
                                            className={index <= (hover || rating) ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}
                                        >
                                            <span className="star">&#9733;</span>
                                        </button>
                                        );
                                    })}
                                    </div> */}

                                
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
export default ClientCompleteOrderList;