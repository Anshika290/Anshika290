import React from 'react'
import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'

function Add() {
  
  const [id,setId]=useState("");
  const [coupon_code,setCoupon_code]=useState("");
  const [from_date,setFrom_date]=useState("");
  const [to_date,setTo_date]=useState("");
  const [valid_in,setValid_in]=useState("");
  const [bank_offer,setBank_offer]=useState("");
  const [discount_percentage,setDiscount_percentage]=useState("");
  const [flat_discount,setFlat_discount]=useState("");
  
 
  function submitUser(){
    let data = {id,coupon_code,from_date,to_date,valid_in,bank_offer,discount_percentage,flat_discount}
    fetch("http://localhost:4000/admin/offers",{
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
    <h5 style={{textAlign:"center",height:"30px"}}>Add Offer</h5>
    </div>
    <div>
    <Form>
      <Form.Group  controlId="formBasicId">
        <Form.Label>Offer Id</Form.Label>
        <Form.Control type="text"  value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Offer Id" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicCoupanCode">
        <Form.Label>Coupan Code</Form.Label>
        <Form.Control type="text" value={coupon_code} onChange={(e)=>{setCoupon_code(e.target.value)}} placeholder="Enter Coupan Code" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicDate">
        <Form.Label>From Date</Form.Label>
        <Form.Control type="date" value={from_date} onChange={(e)=>{setFrom_date(e.target.value)}} placeholder="Enter Date" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicDate">
        <Form.Label>To Date</Form.Label>
        <Form.Control type="date" value={to_date} onChange={(e)=>{setTo_date(e.target.value)}} placeholder="Enter Date" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicValidIn">
        <Form.Label>Valid In</Form.Label>
        <Form.Control type="text" value={valid_in} onChange={(e)=>{setValid_in(e.target.value)}} placeholder="Enter valid city" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicBankOffer">
        <Form.Label>Bank Offer</Form.Label>
        <Form.Control type="text" value={bank_offer} onChange={(e)=>{setBank_offer(e.target.value)}} placeholder="Enter Bank Offer" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicDiscountPercentage">
        <Form.Label>Discount Percentage</Form.Label>
        <Form.Control type="number" value={discount_percentage} onChange={(e)=>{setDiscount_percentage(e.target.value)}} placeholder="Discount Percentage" />
      </Form.Group>

      <Form.Group  controlId="formBasicDiscount">
        <Form.Label>Flat Discount</Form.Label>
        <Form.Control type="number" value={flat_discount} onChange={(e)=>{setFlat_discount(e.target.value)}} />
        
      </Form.Group>

     
     <Button variant="primary"  style={{marginTop:"10px"}} type="submit" onClick={submitUser}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Add;