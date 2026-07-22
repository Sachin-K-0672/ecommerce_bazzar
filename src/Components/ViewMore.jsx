import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ViewMore = () => {
  let params = useParams()
  let productId = params.id
  // console.log(productId)
  let [oneProduct, setOneProduct] = useState({})
  let fetchApi = async () => {
    let response = await axios.get(`http://localhost:4000/products/${productId}`)
    setOneProduct(response.data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  console.log(oneProduct)
  let { id, title, price, description, category, image, rating } = oneProduct

  let navigate = useNavigate()
  let closecard = () => {
    navigate('/')
  }

  //Logic for Delete Item
  let handleDelete = () => {
    let bool = window.confirm(`do you want to delete this Product...?`)
    if (bool) {
      axios.delete(`http://localhost:4000/products/${productId}`)
      // alert('Product is Deleted')
      toast.info('Product is Deleted')
      navigate('/')
    }
    else {
      // alert('Product is Not Deleted')
      toast.success('Product is Not Deleted')
    }
  }


  //Todo: Add the Product to the Cart items

  let addToCart = () => {

    let bool = window.confirm(`do you want Add the product to the cart...?`)
    if (bool) {
      axios.post(`http://localhost:4000/cartitems`, oneProduct)
      toast.success('Product is Added')
    }
    else {
      toast.error('Product is Not Added')
    }
  }

  let handleClose = () => {
    navigate('/')
  }

  return (
    <>
      <div className="viewmore-card">
        <br /><br /><br /><br />
        <div className="container">
          <div className="left">

            <img src={image} alt="" />
          </div>
          <div className="right">
            <div className="close">
              <CloseIcon onClick={handleClose} style={{ fontSize: "40px", color: "red" }} />
            </div>
            <div className="title">{title}</div>
            
            <div className="category"><div>{category}</div></div>
            <br />
            <div className="rating">
              <div className="rate">{rating?.rate} <StarIcon /> </div>
              <div className="count">({rating?.count} reviews)</div>
            </div>
            <br />
            <div className="desc">{description}</div>
            <br />
            

              <div className="price">₹{Math.floor(price * 90)}.00/-</div>
            
            <br />
            <div className="btnss">
              <button className='cart' onClick={addToCart}>
                <div className="sub-cart"><AddShoppingCartIcon/></div> <div>Add to cart</div>
              </button>
              <button className='dlt' onClick={handleDelete}>
               <div className="sub-cart"><DeleteForeverIcon/></div> <div>Delete</div>
              </button>
            </div>

            <br /><br />


          </div>
        </div>

        <br /><br /><br /><br />
      </div>

    </>
  )
}

export default ViewMore
