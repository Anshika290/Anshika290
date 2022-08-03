import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Navbars from '../Navbar/Admin/Navbars'


function Sidebar() {
  return (
    <>
    <Navbars/>
    <div className='sidebar'>    
        <ul>
        <li>Shop</li>
            <ul>
                <li><Link  style={{textDecoration:"none",color:"black"}} to="/addshop">Add Shop</Link></li>
                <li><Link  style={{textDecoration:"none",color:"black"}} to="/viewshop">View Shop</Link></li>
            </ul>
        <li>Product</li>
            {/* <ul> */}
            <li>Category</li>
            <ul >
            <li><Link style={{textDecoration:"none",color:"black"}} to="/addcategory">Add Category</Link></li>        
            <li><Link style={{textDecoration:"none",color:"black"}} to="/viewcategory">View Category</Link></li>
            {/* </ul> */}
            </ul>
            {/* <ul> */}
            <li>Sub-Category</li>
            <ul>
            <li><Link style={{textDecoration:"none",color:"black"}} to ="/addsubcategory">Add Sub-Category</Link></li>
            <li><Link style={{textDecoration:"none",color:"black"}} to ="/viewsubcategory">View Sub-Category</Link></li>
            </ul>
            {/* </ul> */}
        <li>Offer</li>
        <ul>
            <li><Link style={{textDecoration:"none",color:"black"}} to ="/addoffer">Add Offer</Link></li>
            <li><Link style={{textDecoration:"none",color:"black"}} to ="/viewoffer">View Offer</Link></li>
        </ul>
       <li>User Management</li>
        <ul>
            {/* <li ><Link style={{textDecoration:"none"}} to ="/user">User</Link></li> */}
            <li ><Link style={{textDecoration:"none",color:"black"}} to ="/users">Users</Link></li>
        </ul>

    </ul>
    </div>
    </>
  )
}

export default Sidebar