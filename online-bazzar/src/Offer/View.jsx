import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Button,Form,Modal} from 'react-bootstrap'
import DataTable from 'react-data-table-component'

function View() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const[search,setSearch] = useState("")
  const[data,setData] = useState([])
  const[filtereddata,setFiltereddata] = useState([])

  const [id,setId]=useState("");
  const [coupon_code,setCoupon_code]=useState("");
  const [from_date,setFrom_date]=useState("");
  const [to_date,setTo_date]=useState("");
  const [valid_in,setValid_in]=useState("");
  const [bank_offer,setBank_offer]=useState("");
  const [discount_percentage,setDiscount_percentage]=useState("");
  const [flat_discount,setFlat_discount]=useState("");

  function updateData(id,coupon_code,from_date,to_date,valid_in,bank_offer,discount_percentage,flat_discount){
    setId(id) ;
    setCoupon_code(coupon_code);
    setFrom_date(from_date);
    setTo_date(to_date);
    setValid_in(valid_in);
    setBank_offer(bank_offer);
    setDiscount_percentage(discount_percentage);
    setFlat_discount(flat_discount);
    
      console.log(id,coupon_code,from_date,to_date,valid_in,bank_offer,discount_percentage,flat_discount)

      setShow(true);
    
 
      }

  async function updateUser(){
    let data = {id,coupon_code,from_date,to_date,valid_in,bank_offer,discount_percentage,flat_discount}
   const api = await fetch(`http://localhost:4000/admin/offers/${id}`,{
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
 
  const get_value = async ()=>{
   const api = await fetch("http://localhost:4000/admin/offers",{method:'GET'});
   const res = await api.json();
   setData(res.response);
   setFiltereddata(res.response)
  }
  useEffect(()=>{
 get_value()
  },[]);

  useEffect(()=>{
    const result = data.filter(offer=>{
      return offer.coupon_code.toLowerCase().match(search.toLowerCase())
    })
    setFiltereddata(result)
  }, [search])

  async function deleteUser(id){
    const api = await fetch(`http://localhost:4000/admin/offers/${id}`,{method:'DELETE'})
    console.log(api)
    alert("data deleted")
  await get_value()
  }

  const columns = [
    {
      name:"Offer Id" ,
      selector:(row)=>row.id,
      sortable:true,
    },
    {
      name:"Coupan Code" ,
      selector:(row)=>row.coupon_code,
      sortable:true,
    },
    {
      name:"From Date" ,
      selector:(row)=>row.from_date,
      sortable:true,
    },
    {
      name:"To Date" ,
      selector:(row)=>row.to_date,
      sortable:true,
    },
    {
      name:"Valid In" ,
      selector:(row)=>row.valid_in,
      sortable:true,
    },
    {
      name:"Bank Offer" ,
      selector:(row)=>row.bank_offer,
      sortable:true,
    },
    {
      name:"Discount Percentage" ,
      selector:(row)=>row.discount_percentage,
      sortable:true,
    },
    {
      name:"Flat Discount" ,
      selector:(row)=>row.flat_discount, 
      sortable:true,     
    },
    {
      name:"Update",
      cell:(row)=> <button className='btn btn-primary' onClick={()=>{updateData(row.id,row.coupon_code,row.from_date,row.to_date,row.valid_in,row.bank_offer,row.discount_percentage,row.flat_discount)}}>Edit</button>
    },
    {
      name:"Action",
      cell:(row)=> <button className='btn btn-danger' onClick={()=>{deleteUser(row.id)}}>Delete</button>
    }
  ]
  
  
  return (
    <>
    <div>
    <DataTable title="Offer List" columns={columns} data={filtereddata}  
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
          <Modal.Title>Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group controlId="formBasicId">
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

      <Form.Group controlId="formBasicValidIn">
        <Form.Label>Valid In</Form.Label>
        <Form.Control type="text" value={valid_in} onChange={(e)=>{setValid_in(e.target.value)}} placeholder="Enter valid city" />
        
      </Form.Group>

      <Form.Group  controlId="formBasicBankOffer">
        <Form.Label>Bank Offer</Form.Label>
        <Form.Control type="text" value={bank_offer} onChange={(e)=>{setBank_offer(e.target.value)}} placeholder="Enter Bank Offer" />
        
      </Form.Group>

      <Form.Group controlId="formBasicDiscountPercentage">
        <Form.Label>Discount Percentage</Form.Label>
        <Form.Control type="number" value={discount_percentage} onChange={(e)=>{setDiscount_percentage(e.target.value)}} placeholder="Discount Percentage" />
      </Form.Group>

      <Form.Group  controlId="formBasicDiscount">
        <Form.Label>Flat Discount</Form.Label>
        <Form.Control type="number" value={flat_discount} onChange={(e)=>{setFlat_discount(e.target.value)}} />
        
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