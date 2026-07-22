import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  let [apidata,setApidata]=useState([])
  let fetchApi =async ()=>{
  let response=await axios.get('http://localhost:4000/products')
  setApidata(response.data)
  }

  useEffect(()=>{
    fetchApi()
  },[])

  // console.log(apidata)

  let navigate=useNavigate()
  let viewMore=(id)=>{
    navigate(`/viewmore/${id}`)
  }

  //todo:Filter Category
  let [filteredArray,setFilteredArray]=useState([])

  useEffect(()=>{
    setFilteredArray(apidata)
  },[apidata])
  
  let allCategory=["All","men's clothing","jewelery","electronics","women's clothing"]
  let handleCategory=(e)=>{
    let btnName= e.target.innerText
  

    if (btnName === 'All'){
      setFilteredArray(apidata)
    }else{
      let res= apidata.filter((elem)=>{
            return elem.category === btnName
          })
          setFilteredArray(res)
        }
    }
   

  return (
    <>
      <div className="products">
        <div className="category">
          <ul>
            {/* <li><button onClick={handleCategory}>men's clothing</button></li>
            <li><button>jewelery</button></li>
            <li><button>electronics</button></li>
            <li><button>women's clothing</button></li> */}

            {allCategory.map((elem,index)=>{
              return(
                <li key={index}>
                  <button onClick={handleCategory}>{elem}</button>
                </li>
              )

            })}
          </ul>
        </div>
      <div className="container">
        {filteredArray.map((elem,index)=>{
          let {id,title,image,price}=elem
          return(
            <div className="card" key={index}>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="title">{title}</div>
              <div className="pricee">
                <div className="price">₹{Math.floor(price*90)}.00/-
                  </div>
              </div>
              <br />
              <div className="btn">
                <button onClick={()=>{viewMore(id)}}>
                  View More
                </button>
              </div>
              <br />
            </div>
          )
        })}
      </div>
      <br />
      <br />
      </div>

    </>
  )
}

export default LandingPage
