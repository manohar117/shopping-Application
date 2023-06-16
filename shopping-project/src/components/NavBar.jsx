import { AppBar,Toolbar,Typography,styled } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
import Space from "./Space";
import {BiUserCircle} from "react-icons/bi";


const Header =styled(AppBar)`background: #111111;`;

const Tabs=styled(NavLink)`
font-size : 20px;
margin-right: 20px;
color : inherit;
text-decoration :none;
justify-content: space-between;
`;




const NavBar = () =>{
    return (

        <div >
        <Header position="static" >
            <AppBar>
                <Toolbar>
                    <Tabs to="/">SHOPPING APPLICATION</Tabs>
                    <Tabs to="/all">ALL PRODUCTS</Tabs>
                    <Tabs to="/add">ADD PRODUCT</Tabs>
                    <th></th><tr></tr>
                    {/* <br></br>
                    <Marquee text="hi">Hello</Marquee>
                    <br></br> */}
                    <Tabs to="/about">About us</Tabs>
                    <Tabs to="/contact">Contact us</Tabs>
                    {/* <Tabs to='/login' >Login</Tabs> */}
                    {/* style={{alignItems:"flex-end",display:"flex"}} */}
                    {/* <Tabs to='/logout'>Log out</Tabs> */}
                    <Tabs to='/view' >CUSTOMER</Tabs>
                    <div className="tableft">
                    <Tabs to="/loginas" >Login As <BiUserCircle/></Tabs>
                    </div>
                </Toolbar>
            </AppBar>
        </Header>
        {/* <br></br> */}
        <Space/>
             <marquee className="marqueestyle" style={{ color: 'black', fontSize: '2em' }}>WELCOME TO SHOPPING APPLICATION</marquee>
             {/* <br></br> */}
        </div>
    )
}
export default NavBar;