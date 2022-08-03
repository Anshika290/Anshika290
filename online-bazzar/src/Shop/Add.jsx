import React from 'react'
import { useState } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'

function Add() {

  const [id,setId]=useState("");
  const [registration_no,setRegistration_no]=useState("");
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [pin,setPin]=useState("");
  const [contact,setContact]=useState("");
  const [email,setEmail]=useState("");
  const [owner,setOwner]=useState("");
  const [url,setUrl]=useState("");
  const [gst_no,setGst_no]=useState("");
  const [type,setType]=useState("");
  const [turnover,setTurnover]=useState("");
  const [description,setDescription]=useState("");
  const [password,setPassword]=useState("");
  const [aadhar_no,setAadhar_no]=useState("");
  const [status,setStatus]=useState("");

  function submitUser(){
    // console.warn({id,name});
    let data = {id,registration_no,name,address,city,state,pin,contact,email,owner,url,gst_no,type,turnover,description,password,aadhar_no,status}
    fetch("http://localhost:4000/admin/shopregistration",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((response) => response.json())
  .then((json) => console.log(json));
  alert("data submitted")
  }

  return (
  <>
  <div>
  <h5 style={{textAlign:"center",height:"30px"}}>Add Shop</h5>
  </div>
  <div>
  <Form>
    <Row>
      <Col>
      <Form.Group  controlId="formBasicNo">
        <Form.Label>Registration No</Form.Label>
        <Form.Control type="text" value={registration_no}  onChange={(e)=>setRegistration_no(e.target.value)} placeholder="Enter Registration No" />
      </Form.Group>

      <Form.Group  controlId="formBasicShops">
        <Form.Label>Shop Id</Form.Label>
        <Form.Control type="text" value={id}  onChange={(e)=>setId(e.target.value)} placeholder="Shop Id" />
      </Form.Group>

      <Form.Group  controlId="formBasicShop">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="Shop Name" />
      </Form.Group>

      <Form.Group  controlId="formBasicAddress">
        <Form.Label>Address </Form.Label>
        <Form.Control type="text" value={address}  onChange={(e)=>setAddress(e.target.value)} placeholder="Address" />
      </Form.Group>

      <Form.Group controlId="formBasicState">
        <Form.Label>State </Form.Label>
        <Form.Control type="text" value={state}  onChange={(e)=>setState(e.target.value)} placeholder="State" />
      </Form.Group>

      <Form.Group  controlId="formBasicCity">
        <Form.Label>City </Form.Label>
        <Form.Control type="text" value={city}  onChange={(e)=>setCity(e.target.value)} placeholder="City" />
      </Form.Group>

      <Form.Group  controlId="formBasicContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" value={contact}  onChange={(e)=>setContact(e.target.value)} placeholder="Contact" />
      </Form.Group>

      <Form.Group  controlId="formBasicOwner">
        <Form.Label>Owner</Form.Label>
        <Form.Control type="text" value={owner}  onChange={(e)=>setOwner(e.target.value)} placeholder="Owner" />
      </Form.Group>

      <Form.Group  controlId="formBasicType">
        <Form.Label>Type</Form.Label>
        <Form.Select id="disabledSelect"  value={type}  onChange={(e)=>setType(e.target.value)}>
            <option>Electronics</option>
            <option>Grossary</option>
            <option>Footwear</option>
            <option>Accessories</option>
            <option>BeautyProducts</option>
            <option>Clothes</option>
            <option>GeneralStores</option>
            <option>Stationary</option>
        
          </Form.Select>
      </Form.Group>
      </Col>
      <Col>

      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      </Form.Group>
      

      <Form.Group  controlId="formBasicUrl">
        <Form.Label>Url</Form.Label>
        <Form.Control type="text" value={url}  onChange={(e)=>setUrl(e.target.value)} placeholder="Url" />
      </Form.Group>
      

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description}  onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
      </Form.Group>

      <Form.Group  controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Select id="disable"  type="text" value={status}  onChange={(e)=>setStatus(e.target.value)}>
            <option>pending</option>
            <option>Completed</option>
          
         </Form.Select>
      </Form.Group>


      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Password"  placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group  controlId="formBasicTurnOver">
        <Form.Label>Turn Over</Form.Label>
        <Form.Control type="text" placeholder="Turn Over"  value={turnover}  onChange={(e)=>setTurnover(e.target.value)} />
      </Form.Group>

      <Form.Group  controlId="formBasicGst">
        <Form.Label>Gst</Form.Label>
        <Form.Control type="text" value={gst_no}  onChange={(e)=>setGst_no(e.target.value)} placeholder="Gst Number" />
      </Form.Group>

      <Form.Group  controlId="formBasicPin">
        <Form.Label>Pin</Form.Label>
        <Form.Control type="text" value={pin}  onChange={(e)=>setPin(e.target.value)} placehnumberolder="Pin" />
      </Form.Group>

      <Form.Group  controlId="formBasicAadhar">
        <Form.Label>Aadhar No</Form.Label>
        <Form.Control type="text" value={aadhar_no}  onChange={(e)=>setAadhar_no(e.target.value)} placehnumberolder="Aadhar No" />
      </Form.Group>


      <Button variant="primary"  style={{marginTop:"10px"}} type="submit" onClick={submitUser}>
        Submit
      </Button>
      </Col>
      </Row>
    </Form>
    </div>
  </>
  )
}

export default Add;