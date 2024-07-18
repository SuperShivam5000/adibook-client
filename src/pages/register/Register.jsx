import { useRef } from "react";
import "./register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    async function handleClick(e){
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("https://adibook-api.onrender.com/api/auth/register", user);
                navigate("/login");
            }
            catch(err){
                console.log(err);
            }
        }
    }
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
                    <input placeholder="Username" required ref={username} className="loginInput" />
                    <input placeholder="Email" required ref={email} className="loginInput" type="email" />
                    <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength={6} />
                    <input placeholder="Repeat Password" required ref={passwordAgain} className="loginInput" type="password" />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">
                        Log into account
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
