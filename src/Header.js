import React from "react";
import "./Header.css";
import logo from './linkedin.svg'
import { Search, Home, People, Message,  Notifications, BusinessCenter } from "@material-ui/icons";
import HeaderOptions from "./HeaderOptions";
import { useDispatch } from "react-redux";
import { logout } from "./features/counter/userSlice";
import { getAuth, signOut } from "@firebase/auth";
function Header() {

  const auth = getAuth();

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    console.log("click")
    dispatch(logout());
    signOut(auth).then(()=>{
      console.log("sucessfully signOut")
    }).catch((error) =>{
      console.log(error)
    })
  }
  return (
    <div className="header">
        <div className="header_left">
            <img src={logo} alt=""/>
            <div className="header_search">
                <Search/>
                <input placeholder="Search" type="text"/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOptions Icon={Home} title="Home"></HeaderOptions>
            <HeaderOptions Icon ={People}title="My Network"></HeaderOptions>
            <HeaderOptions Icon={BusinessCenter} title="Jobs"/>
            <HeaderOptions Icon={Message} title="Messaging"></HeaderOptions>
            <HeaderOptions Icon={Notifications} title="Notifications"></HeaderOptions>
            <HeaderOptions avatar={"true  "} title="me" 
            onClick={logoutOfApp}>

            </HeaderOptions>
        </div>
        
    </div>
  );
}

export default Header;
