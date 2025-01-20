import React, { useState } from 'react'
import './Products.css'
import { FaQuoteLeft } from "react-icons/fa";
import { useContext } from 'react';
import { productContext } from '../../../Context/ProductContext';
import { NavLink } from 'react-router';
function index() {
    let {products,loading}=useContext(productContext)
    let [search,setSearch]=useState("")
    let [order,setOrder]=useState("asc")

  const filteredProducts= products ?  products
  .filter(product=>(
    product.name.toLowerCase().includes(search.toLowerCase())
  ))
  .sort((a,b)=>{
    if (order === "asc"){
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })
  : [];
  return (
    <div>
      <section id='products'>
        <div className="hadmer">
            <h6>Testimonial</h6>
            <h3>Our Products</h3>


        </div>
        
        <input
                        type="text"
                        placeholder="Seach..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                    <button
                        onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            cursor: 'pointer'
                        }}
                    >
                        Price: {order === "asc" ? "Ascending" : "Descending"}
                    </button>
        <div className="pr-cards">

          {
            filteredProducts.map((product,index)=>(
                <NavLink to={`/${product._id}`}>
                      <div className="pr-card" key={product._id}>
                <div className="pcc-icon">
                    <FaQuoteLeft/>
                </div>
                <p>{product.desc}</p>
                <div className="pcc-profile">
                    <img src={product.image} alt="" />
                    <h3>{product.name}</h3>
                    <h6>{product.price}$</h6>
                </div>
            </div>
                </NavLink>
            ))
          }
   
        </div>
      </section>
    </div>
  )
}

export default index
