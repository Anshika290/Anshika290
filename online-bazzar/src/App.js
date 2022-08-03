import Sidebar from './Sidebar/Sidebar';
import './App.css';
import OfferAdd from '../src/Offer/Add'
import OfferView from '../src/Offer/View'
import CategoryAdd from '../src/Product/ProductCategory/Add'
import CategoryView from '../src/Product/ProductCategory/View'
import SubCategoryAdd from '../src/Product/ProductSubCategory/Add'
import SubCategoryView from '../src/Product/ProductSubCategory/View'
import ShopAdd from '../src/Shop/Add'
import ShopView from '../src/Shop/View'
import User from '../src/UserManagement/User'
import Users from '../src/UserManagement/Users'
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='fixed-component'>
      <Sidebar/>

      </div>
      <div className='main-component'>
      <Routes>
        <Route path="/addshop" element={<ShopAdd/>}/>
        <Route path="/viewshop" element={<ShopView/>}/>
        <Route path="/addcategory" element={<CategoryAdd/>}/>
        <Route path="/viewcategory" element={<CategoryView/>}/>
        <Route path="/addsubcategory" element={<SubCategoryAdd/>}/>
        <Route path="/viewsubcategory" element={<SubCategoryView/>}/>
        <Route path="/addoffer" element={<OfferAdd/>}/>
        <Route path="/viewoffer" element={<OfferView/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
      </div> 
      
    </>
  );
}

export default App;
