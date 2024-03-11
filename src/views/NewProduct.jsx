import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, Typography, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar";
import axios from 'axios';

const NewProduct = () => {
    const [productos, setProductos] = useState([]);
    const [IMAGENPRODUCTO, setImage] = useState('');
    const [NOMBREPRODUCTO, setTitle] = useState('');
    const [PRECIOPRODUCTO, setPrice] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/productos');
                const allProductos = response.data;
                setProductos(allProductos);

            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchData();
    }, []);
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setImage(droppedFile);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const productData = {
            NOMBREPRODUCTO,
            IMAGENPRODUCTO,
            PRECIOPRODUCTO

        };

        try {
            const response = await fetch('http://localhost:3000/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                alert('Producto guardado correctamente');
                // Aquí puedes agregar cualquier lógica adicional después de guardar el producto
            } else {
                alert('Error al guardar el producto:', response.statusText);
                // Manejo de errores si es necesario
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error.message);
            // Manejo de errores si es necesario
        }
    };


    return (
        <>

            <VerticalNavbar />
            <Box sx={{ position: 'relative', marginTop: 2 }}>
                <Typography variant="h5" color="white" gutterBottom sx={{ top: 15, left: 500 }}>
                    <b>Nuevo Producto</b>
                </Typography>
                <Grid >
                    <Grid item xs={8} sm={8} md={6} lg={4} >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ width: '60%', p: 3, bgcolor: 'background.paper', borderRadius: 7 }}
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                            style={{ marginTop: '100px', marginLeft: '200px' }}
                        >
                            <label htmlFor="file-input">

                            </label>
                            <Input
                                id="title"
                                value={NOMBREPRODUCTO}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Título del producto"
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                            <Input
                                id="img"
                                value={IMAGENPRODUCTO}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="Link Imagen del producto"
                                fullWidth
                                multiline
                                rows={3}
                                sx={{ mb: 2 }}
                            />

                            <Input
                                id="price"
                                value={PRECIOPRODUCTO}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Precio"
                                fullWidth
                                type="number"
                                sx={{ mb: 2 }}
                            />
                            <Button type="submit" variant="contained" color="error" fullWidth style={{ marginTop: '20px' }}>
                                GUARDAR PRODUCTO
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default NewProduct;
