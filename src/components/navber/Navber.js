import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';



const Navber = () => {

   const product=useSelector((state)=>state.productAction.cardItem)

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amanullah e-commerce 
          </Typography>
         <AddShoppingCartIcon />{product.length}
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Navber;