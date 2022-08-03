import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap'
import DataTable from 'react-data-table-component'


function View() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 
  const[search,setSearch] = useState("")
  const[data,setData] = useState([])
  const[filtereddata,setFiltereddata] = useState([])
 
  const [registration_no,setRegistration_no]=useState("");
  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [state,setState]=useState("");
  const [city,setCity]=useState("");
  const [contact,setContact]=useState("");
  const [owner,setOwner]=useState("");
  const [type,setType]=useState("");
  const [email,setEmail]=useState("");
  const [url,setUrl]=useState("");
  const [description,setDescription]=useState("");
  const [status,setStatus]=useState("");
  const [aadhar_no,setAadhar_no]=useState("");
  const [turnover,setTurnover]=useState("");
  const [gst_no,setGst_no]=useState("");
  const [pin,setPin]=useState("");
  const [password,setPassword]=useState("");
  

  function updateData(registration_no,id,name,address,state,city,contact,owner,type,email,url,description,status,aadhar_no,turnover,gst_no,pin,password){
    setRegistration_no(registration_no);
    setId(id) ;
    setName(name);
    setAddress(address);
    setState(state);
    setCity(city);
    setContact(contact);
    setOwner(owner);
    setType(type);
    setEmail(email);
    setUrl(url);
    setDescription(description);
    setStatus(status);
    setAadhar_no(aadhar_no);
    setTurnover(turnover);
    setGst_no(gst_no);
    setPin(pin);
    setPassword(password);
      console.log(registration_no,id,name,address,state,city,contact,owner,type,email,url,description,status,aadhar_no,turnover,gst_no,pin,password)

      setShow(true);
    
 
      }

  async function updateUser(){
    let data = {registration_no,id,name,address,state,city,contact,owner,type,email,url,description,status,aadhar_no,turnover,gst_no,pin,password}
   const api = await fetch(`http://localhost:4000/admin/shopregistration/${id}`,{
      method:'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    })
    console.log(api)
    handleClose()
    alert("data updated")
    get_value();
    
  }
 const get_value =async ()=>{
  const api = await fetch("http://localhost:4000/admin/shopregistration",{method:'GET'});
  const res = await api.json();
  setData(res.response);
  setFiltereddata(res.response)
 }
 useEffect(()=>{
get_value()
 },[])

 useEffect(()=>{
  const result = data.filter(shop=>{
    return shop.name.toLowerCase().match(search.toLowerCase())
  })
  setFiltereddata(result)
}, [search])

 async function deleteUser(id){
  const api = await fetch(`http://localhost:4000/admin/shopregistration/${id}`,{method:'DELETE'})
  console.log(api)
  alert("data deleted")
  await get_value()
}

const columns = [
  {   
    name:"Registration No" ,                                                      
    selector:(row)=>row.registration_no,
    sortable:true,
  },
  {
    name:"Shop Id" ,
    selector:(row)=>row.id,
    sortable:true,
  },
  {
    name:"Shop Name" ,
    selector:(row)=>row.name,
    sortable:true,
  },
  {
    name:"Address" ,
    selector:(row)=>row.address,
    sortable:true,
  },
  {
    name:"State" ,
    selector:(row)=>row.state,
    sortable:true,
  },
  {
    name:"City" ,
    selector:(row)=>row.city,
    sortable:true,
  },
  {
    name:"Contact" ,
    selector:(row)=>row.contact,
    sortable:true,
  },
  {
    name:"Owner" ,
    selector:(row)=>row.owner,
    sortable:true,
  },
  {
    name:"Type" ,
    selector:(row)=>row.type,
    sortable:true,
  },
  {
    name:"Email" ,
    selector:(row)=>row.email,
    sortable:true,
  },
  {
    name:"Url" ,
    selector:(row)=>row.url,
    sortable:true,
  },
  {
    name:"Description" ,
    selector:(row)=>row.description,
    sortable:true,
  },
  {
    name:"Status" ,
    selector:(row)=>row.status,
    sortable:true,
  },
  {
    name:"Aadhar No" ,
    selector:(row)=>row.aadhar_no,
    sortable:true,
  },
  {
    name:"Turn Over" ,
    selector:(row)=>row.turnover,
    sortable:true,
  },
  {
    name:"Gst" ,
    selector:(row)=>row.gst_no,
    sortable:true,
  },
  {
    name:"Pin" ,
    selector:(row)=>row.pin,
    sortable:true,
  },
  
  {
    name:"Update",
    cell:(row)=> <button className='btn btn-primary' onClick={()=>{updateData(row.registration_no,row.id,row.name,row.address,row.state,row.city,row.contact,row.owner,row.type,row.email,row.url,row.description,row.status,row.aadhar_no,row.turnover,row.gst_no,row.pin)}}>Edit</button>
  },
  {
    name:"Action",
    cell:(row)=> <button className='btn btn-danger' onClick={()=>{deleteUser(row.id)}}>Delete</button>
  }
]



  return (
 
    <>
     <div >
    <DataTable title="Shop List" columns={columns} data={filtereddata}  
    pagination 
    fixedHeader
    fixedHeaderScrollHeight='450px'
    highlightOnHover
    subHeader
    subHeaderComponent={
      <input type="search" placeholder='Search here' className='w-25 form-control'
      value={search}
    onChange={(e)=>setSearch(e.target.value)}/>
    }
    />
    </div>
    
    {/* <h1 className='heading'>View Shop</h1>
    <Table striped className='tables' style={{overflowX:'auto'}}>
      <thead>
        <tr>
          <th>Registration No</th>
          <th>Shop Id</th>
          <th>Shop Name</th>
          <th>Address</th>
          <th>State</th>
          <th>City</th>
          <th>Contact</th>
          <th>Owner</th> */}
          {/* <th>Type</th>
          <th>Email</th>
          <th>Url</th>
          <th>Description</th>
          <th>Status</th>
          <th>Aadhar No</th>
          <th>Turn Over</th>
          <th>Gst</th>
          <th>Pin</th>
          {/* <th>Aadhar No</th> */}
          {/* <th>Update</th>
          <th>Action</th> */} 

        {/* </tr>
      </thead>
      <tbody>
        
         {
         data.map((value,index)=>{
            return(
            <tr key={index}>
              <th>{value.registration_no}</th>
              <th>{value.id}</th>
              <th>{value.name}</th>
              <th>{value.address}</th>
              <th>{value.state}</th>
              <th>{value.city}</th> */}
              {/* <th>{value.contact}</th>
              <th>{value.owner}</th>
              <th>{value.type}</th>
              <th>{value.email}</th>
              <th>{value.url}</th>
              <th>{value.description}</th>
              <th>{value.status}</th>
              <th>{value.aadhar_no}</th>
              <th>{value.turnover}</th>
              <th>{value.gst_no}</th>
              <th>{value.pin}</th>
              {/* <th>{value.aadhar_no}</th> */}
              {/* <th><Button variant="success" onClick={()=>{updateData(value.registration_no,value.id,value.name,value.address,value.state,value.city,value.contact,value.owner,value.type,value.email,value.url,value.description,value.status,value.aadhar_no,value.turnover,value.gst_no,value.pin)}}>Edit</Button></th>
              <th><Button variant="danger" onClick={()=>{deleteUser(value.id)}}>Delete</Button></th> 
              </tr>
            ) 

          })
         }

      </tbody>
    </Table> */}
    <div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Shop Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
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

      <Form.Group  controlId="formBasicState">
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

      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      </Form.Group>

      <Form.Group  controlId="formBasicUrl">
        <Form.Label>Url</Form.Label>
        <Form.Control type="text" value={url}  onChange={(e)=>setUrl(e.target.value)} placeholder="Url" />
      </Form.Group>

      <Form.Group  controlId="formBasicDescription">
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
    </Form>
  
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={()=>{updateUser()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    </>
  )
}


export default View;