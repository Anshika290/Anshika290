import React from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'

function Users() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
 
  const[search,setSearch] = useState("")
  const[data,setData] = useState([])
  const[filtereddata,setFiltereddata] = useState([])

  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [date_of_joining,setDate_of_joining]=useState("");
  const [department,setDepartment]=useState("");
  const [role,setRole]=useState("");
  const [status,setStatus]=useState("");

 function updateData(id,name,date_of_joining,department,role,status){
    setId(id) ;
    setName(name);
    setDate_of_joining(date_of_joining);
    setDepartment(department);
    setRole(role);
    setStatus(status);
    
      console.log(id,name,date_of_joining,department,role,status)

      setShow(true);
    }

  async function postUser(){
    let data = {id,name,date_of_joining,department,role,status}
   const api = await fetch(`http://localhost:4000/admin/user`,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    })
    console.log(api)
    // handleClose()
    // alert("data posted")
    get_value();
    
  }

  async function updateUser(){
    let data = {id,name,date_of_joining,department,role,status}
   const api = await fetch(`http://localhost:4000/admin/user/${id}`,{
      method:'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    })
    console.log(api)
    handleClose()
    alert("data updated ")
    get_value();
    
  }
  const get_value =async ()=>{
   const api = await fetch("http://localhost:4000/admin/user",{method:'GET'});
   const res = await api.json();
   setData(res.response);
   setFiltereddata(res.response)
   
  }
  useEffect(()=>{
 get_value()
  },[])

  useEffect(()=>{
    const result = data.filter(user=>{
      return user.name.toLowerCase().match(search.toLowerCase())
    })
    setFiltereddata(result)
  }, [search])

async function deleteUser(id){
  const api = fetch(`http://localhost:4000/admin/user/${id}`,{method:'DELETE'})
  console.log(api)
    alert("data deleted")
 await get_value()
  }

const columns = [
     
  {
    name:"User Id" ,
    selector:(row)=>row.id,
    sortable:true,
  },
  {
    name:"User Name" ,
    selector:(row)=>row.name,
    sortable:true,
  },
  {
    name:"Date of joining" ,
    selector:(row)=>row.date_of_joining,
    sortable:true,
  },
  {
    name:"Department" ,
    selector:(row)=>row.department,
    sortable:true,
  },
  {
    name:"Role" ,
    selector:(row)=>row.role,
    sortable:true,
  },
  {
    name:"Status" ,
    selector:(row)=>row.status,
    sortable:true,
  },
  
  {
    name:"Update",
    cell:(row)=> <button className='btn btn-primary' onClick={()=>{updateData(row.id,row.name,row.date_of_joining,row.department,row.role,row.status)}}>Edit</button>
  },
  {
    name:"Action",
    cell:(row)=> <button className='btn btn-danger' onClick={()=>{deleteUser(row.id)}}>Delete</button>
  }
]

  
  return (
    <>
     <div style={{textAlign:"end",marginTop:"40px"}}>
    <button className='btn btn-primary' onClick={()=>{setShow(true)}}>Add</button>
    </div>
    <div>
    <DataTable title="User List" columns={columns} data={filtereddata}  
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
   
       <div>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>User Management</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
    <Form>
      <Form.Group  controlId="formBasicId">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter User Id" />
      </Form.Group>

      <Form.Group  controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter User Name " />
      </Form.Group>

      <Form.Group  controlId="formBasicCategoryId">
        <Form.Label>Date of joining</Form.Label>
        <Form.Control type="date" value={date_of_joining} onChange={(e)=>{setDate_of_joining(e.target.value)}} placeholder="Date" />
      </Form.Group>

      <Form.Group  controlId="formBasicDepartment">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" value={department} onChange={(e)=>{setDepartment(e.target.value)}} placeholder="Department" />
      </Form.Group>

      <Form.Group  controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        {/* <Form.Control type="text" value={role} onChange={(e)=>{setRole(e.target.value)}} placeholder="Role" /> */}
        <Form.Select id="disable"  type="text" value={role}  onChange={(e)=>setRole(e.target.value)}>
            <option>Admin</option>
            <option>Super Admin</option>
            <option>Clerk</option>
         </Form.Select>
      </Form.Group>

      <Form.Group  controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" value={status} onChange={(e)=>{setStatus(e.target.value)}} placeholder="Status" />
      </Form.Group>
      
    </Form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="primary" type ="submit" onClick={()=>{setShow(false)}}>
            cancel
          </Button>
          <Button  variant="primary" type ="submit" onClick={()=>{postUser()}}>
            Save Changes
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>
    <div>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>User Management</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
    <Form>
      <Form.Group  controlId="formBasicId">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter User Id" />
      </Form.Group>

      <Form.Group  controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter User Name " />
      </Form.Group>

      <Form.Group  controlId="formBasicCategoryId">
        <Form.Label>Date of joining</Form.Label>
        <Form.Control type="date" value={date_of_joining} onChange={(e)=>{setDate_of_joining(e.target.value)}} placeholder="Date" />
      </Form.Group>

      <Form.Group  controlId="formBasicDepartment">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" value={department} onChange={(e)=>{setDepartment(e.target.value)}} placeholder="Department" />
      </Form.Group>

      <Form.Group  controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        {/* <Form.Control type="text" value={role} onChange={(e)=>{setRole(e.target.value)}} placeholder="Role" /> */}
        <Form.Select id="disable"  type="text" value={role}  onChange={(e)=>setRole(e.target.value)}>
            <option>Admin</option>
            <option>Super Admin</option>
            <option>Clerk</option>
         </Form.Select>
      </Form.Group>

      <Form.Group  controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" value={status} onChange={(e)=>{setStatus(e.target.value)}} placeholder="Status" />
      </Form.Group>
      
    </Form>
    
        </Modal.Body>
        <Modal.Footer>
          {/* <Button  variant="primary" type ="submit" onClick={()=>{setShow(false)}}>
            cancel
          </Button> */}
          <Button  variant="primary" type ="submit" onClick={()=>{updateUser()}}>
            Save Changes
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>

    </>
  )
}

export default Users