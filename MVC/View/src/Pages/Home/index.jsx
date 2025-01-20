import React from 'react'
import Hero from '../../Components/Main/Hero'
import Feature from '../../Components/Main/Feature'
import About from '../../Components/Main/About'
import Blog from '../../Components/Main/Blog'
import { Helmet } from 'react-helmet'; 
import Products from '../../Components/Main/Products'
function index() {
  return (
    <div>
       <Helmet>
        <title>Home</title> 
        <meta name="description" content="Welcome to our homepage." /> 
      </Helmet>
    <Hero/>
    <Feature/>
    <About/>
    <Products/>
    <Blog/>
    </div>
  )
}

export default index
