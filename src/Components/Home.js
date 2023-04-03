import React from 'react'
import '../ComponentCSS/styles.css'
import logo from '../Images/logo.png'
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Home = () => {
    return (
        <React.Fragment>
        <div className='header'>

            <div className='left'>
                <img className='logo' src={logo} alt="React Image" />
                {/* <LocationOnIcon sx={{ color: "white", marginLeft: "0.5rem", marginBottom:"0.6rem"}}/> */}
                <LocationOnIcon/>
        <span className="delivery-address">Pune, 411033</span>
                {/* <span className="h1" >Deliver To India</span> */}
            </div>

            <div className='center'>
                Center
            </div>

            <div className='right'>
              
                <ul className='navbarList'>
                    <li>EN</li>
                    <li>Hello,SignIn</li>
                    <li>Return & Orders</li>
                    <li>Cart</li>

                </ul>
            </div>

        </div>
        </React.Fragment>
    )
}

export default Home