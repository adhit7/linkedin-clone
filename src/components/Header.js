import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header(){
    return (
        <div className="Header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://lh3.googleusercontent.com/proxy/5qKeV4LYaJiAOeDUw5OxdPWU1zQWTkpC8Jcos6Zv5X1XDd0BMM50PNyWt7TCg3vcUhIVOIt-NPi73Cnl3BxD-Y5NMsp08sWnPZ7qzmhmDCoFni-lRADPJ9H2L3g0NtOYnNsz_zk" title="me"/>
            </div>
        </div>
    )
}

export default Header;
