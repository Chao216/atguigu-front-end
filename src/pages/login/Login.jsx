import React, {Component} from "react"
import "./login.less"
import logo from "./images/Timma-logos-300.jpeg"

// this is the login router component
export default class Login extends Component {
    render(){
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="header-logo"  />
                    Timma managment system
                </header>
                <section className="login-content"></section>
            </div>
        )
    }
}