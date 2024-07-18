import { useContext, useRef } from "react";
import "./login.css";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@mui/material";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    function handleClick(e){
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value}, dispatch);
    };

    console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AdiBook</h3>
                <span className="loginDesc">
                    Connecting you with friends around the world.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                    <input placeholder="Password" type="password" required minLength={6} className="loginInput" ref={password}/>
                    <button className="loginButton" disabled={isFetching}>{isFetching?<CircularProgress color="secondary" size="20px"/>:"Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                    {isFetching?<CircularProgress color="secondary" size="20px"/>:"Create a New Acccount"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
