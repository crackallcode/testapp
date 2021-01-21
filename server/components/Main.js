import React, { useEffect, useState } from "react"
import Axios from "axios"
import "./App.css";



export default function Main(){

    const [postList, setPostList] = useState([])

    useEffect(() =>{
    Axios.get('http://localhost:3500/api/get').then((data) =>{
        setPostList(data.data)
    })
    })

    return(
        <div className="mainPage">
            <div className="postContainer">
            {postList.map((val, key) => {
              return(  
                <div className="post">
                <h1>{val.title}</h1>
                <p>{val.post_text}</p>
                <h4>PhD Tech</h4>
                </div>)
            })}
       
 
            </div>
        </div>
    )

}