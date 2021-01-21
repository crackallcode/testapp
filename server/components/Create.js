import React, { useEffect, useState } from "react"
import "./App.css";
import Axios from 'axios';



export default function Create(){

    const [userName, setName] = useState("")

    const [title, setTitle] = useState("")

    const [text, setText] = useState("")

    const submitPost = () => {
        Axios.post('http://localhost:3500/api/create', {
        userName: userName, 
        title: title, 
        text: text
    });
    };

    return(
        <div className="createpost">
            <div className="uploadPost">
            <h1>SQL injection MySQL</h1>
                <h3>Blog author</h3>
                    <input className="at" type="text" onChange={(e) => {
                    setName(e.target.value) }} 
                    />
                <h3>Blog title</h3>
                    <input className="at" type="textarea" onChange={(e) => {
                    setTitle(e.target.value) }} />
                <h3>Blog content</h3>
                    <textarea className="area" onChange={(e) => {
                    setText(e.target.value) }} /><br></br>
                <button onClick={submitPost}>Submit</button><br></br>
            </div>

        </div>
    )

}