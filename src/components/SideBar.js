import React from 'react';
import "./SideBar.css";
import { Avatar } from "@material-ui/core";

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg" 
                alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Adhithyan S</h2>
                <h4>adhithyans786@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">14</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">16</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react js")}
                {recentItem("programming")}
                {recentItem("software engineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default SideBar;

