import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../style/Header.css"
const Header = () => {
    const [btn, setbtn]=useState(["login"])
    const OnlineStatus=useOnlineStatus()
    return (
        <div className="header bg-blue-200">
            <div className="logo-container ">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        {OnlineStatus ? "you are Online Buddy !" : "There is network issue"}
                    </li>
                    <li>
                       <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>contact us</Link>
                    </li>
                    <li>
                    <Link to={"/cart"}>cart</Link>
                    </li>
                    <button onClick={()=>{
                        btn==="login" ? setbtn("logout") : setbtn("login")
                    }}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;