import React from 'react'
import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'

function Add() {

  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [category_id,setCategory_id]=useState("");

  function submitUser(){
    // console.warn({id,name});
    let data = {id,name,category_id}
    fetch("http://localhost:4000/admin/subproductcategory",{
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
    <h5 style={{textAlign:"center",height:"30px"}}>Product Sub-Category</h5>
    </div>
    <div >
    <Form>
      <Form.Group  controlId="formBasicSubCategoryId">
        <Form.Label>Sub-Category Id</Form.Label>
        <Form.Control type="text" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Sub-Category Id" />
      </Form.Group>

      <Form.Group  controlId="formBasicSubCategoryName">
        <Form.Label>Sub-Category Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Sub Category Name " />
      </Form.Group>

      <Form.Group  controlId="formBasicCategoryId">
        <Form.Label>Category Id</Form.Label>
        <Form.Control type="text" value={category_id} onChange={(e)=>{setCategory_id(e.target.value)}} placeholder="Category Id" />
      </Form.Group>
      <Button variant="primary"  style={{marginTop:"10px"}} type="submit" onClick={submitUser}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default Add