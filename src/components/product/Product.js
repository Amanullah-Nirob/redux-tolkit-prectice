import React from 'react';
import { useEffect,useState } from 'react';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch,useSelector} from 'react-redux';
import {addProduct} from '../../store/productSlice'
import { cart } from '../../cart';


const Product = () => {
const dispatch=useDispatch()
const product=useSelector((state)=>state.productAction.cardItem)
   const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://whispering-springs-16614.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])



    function handleAddItemToCart(newItem,items,group) {
        let newItems=[]
        newItems=items
        if(items.length>0){
           const existItem=items.find((x)=>x.id===newItem.id)
          if(existItem){
           existItem.quantity+=1
          }else{
           newItems.push(newItem)
          }
   
        }else{
           newItems.push(newItem)
        }
         console.log(newItems);
     }


     
    return (
        <div>
             <Container>
            <Grid container spacing={2}>
            {data.map((x)=>{
                return(
                    <Grid item xs={12} md={4} key={x._id}>
                   <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        image={x.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        { x.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         {x.dis}
                        </Typography>
                    </CardContent>
                    <CardActions>
                  <Button onClick={(e)=>handleAddItemToCart({id:x._id,quantity:1},cart)} size="small" variant="contained">add to card</Button>
                    </CardActions>
                    </Card>

                    </Grid> 
                )
            })}
            </Grid>
          </Container>
      

        </div>
    );
};

export default Product;