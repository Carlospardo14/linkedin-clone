import React from "react";
import "./Header.css";
import logo from './linkedin.svg'
import { Search, Home, People, Message,  Notifications, BusinessCenter } from "@material-ui/icons";
import HeaderOptions from "./HeaderOptions";
function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <img src={logo} alt=""/>
            <div className="header_search">
                <Search/>
                <input type="text"/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOptions Icon={Home} title="Home"></HeaderOptions>
            <HeaderOptions Icon ={People}title="My Network"></HeaderOptions>
            <HeaderOptions Icon={BusinessCenter} title="Jobs"/>
            <HeaderOptions Icon={Message} title="Messaging"></HeaderOptions>
            <HeaderOptions Icon={Notifications} title="Notifications"></HeaderOptions>
            <HeaderOptions avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me"></HeaderOptions>
        </div>
        
    </div>
  );
}

export default Header;
