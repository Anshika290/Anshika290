import React from 'react'
import {Button} from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import {Modal,Form} from 'react-bootstrap'
import DataTable from 'react-data-table-component'

function View() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const[search,setSearch] = useState("")
  const[data,setData] = useState([])
  const[filtereddata,setFiltereddata] = useState([])
  
 
  const [id,setId]=useState("");
  const [name,setName]=useState("");

  function updateData(id,name){
    setId(id) ;
    setName(name);
    
      console.log(id,name)

      setShow(true);
    
 
      }

  async function updateUser(){
    let data = {id,name}
   const api = await fetch(`http://localhost:4000/admin/productcategory/${id}`,{
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
   const api = await fetch("http://localhost:4000/admin/productcategory",{method:'GET'});
   const res = await api.json();
   setData(res.response);
   setFiltereddata(res.response)
   
  }
  useEffect(()=>{
 get_value()
  },[])

  useEffect(()=>{
    const result = data.filter(category=>{
      return category.name.toLowerCase().match(search.toLowerCase())
    })
    setFiltereddata(result)
  }, [search])

  async function deleteUser(id){
   const api = await fetch(`http://localhost:4000/admin/productcategory/${id}`,{method:'DELETE'})
   console.log(api)
    alert("data deleted")
   await get_value()
  }

  const columns = [
    {
      name:"Category Id" ,
      selector:(row)=>row.id,
      sortable:true,
    },
    {
      name:"Category Name" ,
      selector:(row)=>row.name,
      sortable:true,
    },
    
    {
      name:"Update",
      cell:(row)=> <button className='btn btn-primary' onClick={()=>{updateData(row.id,row.name)}}>Edit</button>
    },
    {
      name:"Action",
      cell:(row)=> <button className='btn btn-danger' onClick={()=>{deleteUser(row.id)}}>Delete</button>
    }
  ]
  

  return (
   <>
    <div >
    <DataTable title="Product Category List" columns={columns} data={filtereddata}  
    pagination 
    fixedHeader
    fixedHeaderScrollHeight='450px'
    highlightOnHover
    // theme='dark'
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
          <Modal.Title>Product Category</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form>
      <Form.Group  controlId="formBasicCategoryId">
        <Form.Label>Category Id</Form.Label>
        <Form.Control type="text"  value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Enter Category Id" />
      </Form.Group>

      <Form.Group controlId="formBasicCategoryName">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Category Name" />
      </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" >
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

export default View