import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {BiUserCircle} from "react-icons/bi";
import Customerlogin from './Customerlogin';

const Loginas =()=>{
    let navigate=useNavigate();

    const movetoadminlogin=()=>{
        navigate('/login');
    }

    const movetocustomerlogin=()=>{
        navigate('/Customerlogin');
    }

    return(
        <div className='box'>
            <h1>Login As{<BiUserCircle />}</h1>
            <br></br>
            <Button  variant="contained" onClick={()=>movetoadminlogin()} >ADMIN</Button>
            {/* <tr></tr> */}
            <td></td>
            <td></td>
            <br></br>
            <Button variant="contained" onClick={()=>movetocustomerlogin()}>CUSTOMER</Button>
        </div>
    )
}

export default Loginas;