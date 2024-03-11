import React from 'react';
import { Drawer, List, ListItem, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 50;

const DrawerContainer = styled('div')({
  width: drawerWidth // Establecer el color del texto como blanco
});



const VerticalNavbar = () => {
  return (
    <>
      <DrawerContainer>
        <Drawer variant="permanent" anchor="left">
          <List>
          <ListItem>
              <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Button color="inherit" >Dashboard</Button>
              </Link>
            </ListItem>
           
            <ListItem>
              <Link to="/producto" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Nuevo Producto</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/inventario" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Inventario Productos</Button>
              </Link>
            </ListItem>
            

            <ListItem>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
                <Button color="inherit">Regresar</Button>
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </DrawerContainer>
    </>
  );
};

export default VerticalNavbar;
