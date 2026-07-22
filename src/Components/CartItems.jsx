import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const CartItems = () => {
  let [cartProduct, setCartProduct] = useState([])
  let fetchApi = async () => {
    let response = await axios.get('http://localhost:4000/cartitems')
    setCartProduct(response.data)

  }

  useEffect(() => {
    fetchApi()
  }, [])

  const totalPrice = cartProduct.reduce((total, item) => {
    // console.log(item.price)
    return total + Math.floor(item.price * 90);

  }, 0);

  const length = cartProduct.length

  //Logic for Delete Item
  const handleDelete = async (id) => {
    const bool = window.confirm("Do you want to delete this product?");

    if (bool) {
      await axios.delete(`http://localhost:4000/cartitems/${id}`);
      toast.info('Product is Deleted')
      fetchApi(); // Reload the cart
    }
    else {
      toast.error('Product is Not Deleted')
    }
  }

  const navigate = useNavigate();

  const handleProceed = () => {
  navigate("/login");
};

  return (
    <>

      <div className='cart_text'>
        <h1 style={{ color: 'white', textAlign: 'center' }}>SHOPPING CART</h1>
      </div>


      <div className="cart">


        <div className="cart-image">

         {cartProduct.length === 0 ? (
    <div className="empty-cart">
      <h1>🛒 Your Cart is Empty</h1>
      <p>Add some products to your cart.</p>

      <button onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  ) : (
          cartProduct.map((elem, index) => {
            // console.log(elem)
            let { id, image, title, description, category, price } = elem


            return (
              <div className="container" key={index}>
                <div className="left">
                  <div className="category"></div>
                  <img src={image} alt="" />
                </div>
                <div className="right">
                  <br />
                  <div className="delete">
                    <CloseIcon onClick={() => handleDelete(id)} />
                  </div>

                  <div className="title">{title}</div>
                  <div className="desc">{description}</div>

                  <div className="price">₹{Math.floor(price * 90)}.00/-</div>
                  <br />
                </div>

              </div>

            );

          }))}
        </div>
        <br /><br />

        {/* <div className="total">

          <div className="price">
            <h2>Sub Total <br />({length} items):</h2> <br />
            <h2>  ₹{totalPrice}.00</h2>
            </div>
          
          <div className="button">
            <button>
              Proceed to Buy
            </button>
          </div>
        </div> */}

        <div className="total">

          <div className="cart-icon">
            🛒
            <span>{length}</span>
          </div>

          <h2>Sub Total</h2>

          <p>({length} Items)</p>

          <hr />

          <h1> ₹{totalPrice}.00</h1>

          <button onClick={handleProceed}>
            🛍 Proceed to Buy
          </button>

        </div>

        <br /><br />


      </div>

    </>
  )
}

export default CartItems
