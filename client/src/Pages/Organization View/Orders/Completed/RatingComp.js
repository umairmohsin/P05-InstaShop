import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './Rating.css'


const RatingList = ()=>{
    const location = useLocation()
    const ID = location.state.orderID
    const email = location.state.email
    const crating = location.state.rating
    // e.preventDefault();
    const [rating,setrating] = useState([])
    const [newrating, setnewrating] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/clientRatings").then(
            (res)=>{
                console.log(res.data)
                setrating(res.data)
            }
            ).catch(
                err=>{console.log(err)}
            )
    },[])
    const myfunc = ()=>{
        rating.map((val,key)=>{
            if(val.clientEmail === email && val.status ==="Completed" && val.acceptedByClient === true && val.ratingGiven == false){
                console.log("rating is present");
                console.log(val);
                newrating[key] = val
            }
        })
    }
    myfunc()
    //function to display button for rating
    const SetRating = async(myID)=>{
        const acceptData = {ans:true, email:email, myID:myID}
        await axios.post("http://localhost:8000/RatingAccepted",acceptData)
        console.log(myID)
    }
    return(
        <div>
            RATING LIST STARS !!!!!!!!!!!!!!!!!
            {
            <div className='ico'>
                <h2>Here is your Rating Orders</h2>
                {
                    newrating.map((val,key)=>{
                        return(
                            <div className='clientCompletedOrderCard'>
                                <div>
                                <p> Order ID : {JSON.parse(JSON.stringify(val,undefined,3)).orderID}</p>
                                <p>Client Email: {JSON.parse(JSON.stringify(val,undefined,3)).clientEmail}</p>
                                <p>Price: PKR{JSON.parse(JSON.stringify(val,undefined,3)).price}</p>
                                <p>Status: {JSON.parse(JSON.stringify(val,undefined,3)).status}</p>
 
                                 <button onClick={()=>{SetRating(val.orderID)}}>Rate stars</button> 
                                <p>Rating :{JSON.parse(JSON.stringify(val,undefined,3)).ratingGiven}</p>
                                <p>Rating :{JSON.parse(JSON.stringify(val,undefined,3)).rating}</p> 
                                
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
export default RatingList;