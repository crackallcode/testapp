import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios"

export default function Login() {

    const [userneamReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [username, setUsername] =useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, SetloginStatus] = useState('')

    const register = () => {
        Axios.post('http://localhost:3500/register', {
            username: userneamReg,
            password: passwordReg
        }).then((response)=>{
            console.log(response);
        });
    };

    const login = () => {
        Axios.post('http://localhost:3500/login', {
            username: username,
            password: password
        }).then((response)=>{
            console.log(response.data.Message);
            if (response.data.Message){
                SetloginStatus(response.data.Message)
            } else {
                SetloginStatus("Logged In");
            }
        }
        );
    };

    return(
        <div>
            <div className="Login">
                <h1>Regestration</h1>
                <label>UserName</label>
                <input type="text" onChange={(e) => {
                    setUsernameReg(e.target.value);
                }}></input>
                <label >Password</label>
                <input type="text" onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}></input>
                <button onClick={register} >Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <label>UserName</label>
                <input type="text" placeholder="Username" onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>
                <label>Password</label>
                <input type="text" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>
                <button onClick={login}>Login</button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    )
    
}

