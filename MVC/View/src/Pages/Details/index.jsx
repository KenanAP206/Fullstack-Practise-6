import React, { useEffect, useState, useContext } from 'react'
import Info from '../../Components/Info/index'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useParams } from 'react-router';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import './Details.css'
import {favoriteContext} from '../../Context/FavoritesContext'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'; 

function Index() {
  const {id} = useParams()
  const [product,SetProduct]=useState(null)
  let {favorite,setFavorite}=useContext(favoriteContext)

  function handleAddFavorite(product){
    let findFavorite= favorite.find(item=>item._id === product._id)

    if(findFavorite){
      
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Already in Favorites"
      });
    }else{
       setFavorite([...favorite,product])

       
       const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Added to Favorites"
      });
    }
 }

  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then((res)=>{
      SetProduct(res.data.data )
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
  },[id])

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Helmet>
        <title>{product.name}</title> 
        <meta name="description" content={product.desc} /> 
      </Helmet>
      <Info title='Details'/>
    <section id='details'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="furniture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {product.desc}
           <h2>{product.price}$</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>handleAddFavorite(product)} size="small" color="primary">
          <FaHeart/>
        </Button>
      </CardActions>
    </Card>
    </section>
    </div>
  )
}

export default Index
