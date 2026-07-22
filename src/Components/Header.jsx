import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  let navigate=useNavigate()
  let visitToCartItems=()=>{
    navigate('/cart-items')
  }

  
  return (
    <>
      <div className="header-part">
        <div className="logo" onClick={()=>navigate('/')}>
            <img src="./public/images/e-commerce-logo.png" alt="" />
        </div>
        <div className="search">
            <form action="">
                <input type="search" placeholder='Enter Product Name'/>
                <button><div><SearchIcon/></div><div>Search</div></button>
            </form>
        </div>
        <div className="btns">
            <button className='login' onClick={()=>navigate('/login')}><div><LoginIcon/></div> <div>LOGIN</div></button>
            <button className='cart' onClick={visitToCartItems}>
              <div>
                <AddShoppingCartIcon/>
              </div> 
              <div>
                CART 
              </div>
            </button>
            {/* <NavLink to='/cart-items'>CART</NavLink> */}

        </div>
        
        
      </div>

      
    </>
  )
}

export default Header
