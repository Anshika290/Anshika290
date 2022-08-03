import React from 'react'
import { useState } from 'react'
import { Form,Button} from 'react-bootstrap'

function Add() {

  const [id,setId]=useState("");
  const [name,setName]=useState("");

  function refreshPage() {
    window.location.refreshPage(false);
  }

  function submitUser(e){
    let data = {id,name}
    e.preventDefault();
    fetch("http://localhost:4000/admin/productcategory",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((response) => response.json())
  .then((json) => console.log(json));
  alert("data submitted")
  refreshPage() 
  }
  return (
    <>
    <div>
     <h5 style={{textAlign:"center",height:"30px"}}>Add Product Category</h5>
     </div>
     <div >
      
    <Form>
      <Form.Group controlId="formBasicCategoryId">
        <Form.Label>Category Id</Form.Label>
        <Form.Control type="text"  value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Category Id" />
      </Form.Group>

      <Form.Group  controlId="formBasicCategoryName">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Category Name" />
      </Form.Group>
      <Button variant="primary"  style={{marginTop:"10px"}} type="submit"  onClick={submitUser}>
        Submit
      </Button>
    </Form>
    </div>
   
    </>
  )
}

export default Add