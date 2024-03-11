import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, Input, InputLabel, Typography, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import VerticalNavbar from "../components/VerticalNavbar";
import axios from 'axios';

const InventarioProductos = () => {
    const [productos, setProductos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState({});
    const [editNombreProducto, setEditNombreProducto] = useState('');
    const [editImagenProducto, setEditImagenProducto] = useState('');
    const [editPrecioProducto, setEditPrecioProducto] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/productos');
                const allProductos = response.data;
                setProductos(allProductos);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:3000/productos/${productId}`);
            setProductos(productos.filter(producto => producto.IDPRODUCTO !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEditProduct = (producto) => {
        setEditProduct(producto);
        setEditNombreProducto(producto.NOMBREPRODUCTO);
        setEditImagenProducto(producto.IMAGENPRODUCTO);
        setEditPrecioProducto(producto.PRECIOPRODUCTO.toString());
        setModalOpen(true);
    };

    const handleSaveEdit = async () => {
        try {
            const updatedProduct = {
                ...editProduct,
                NOMBREPRODUCTO: editNombreProducto,
                IMAGENPRODUCTO: editImagenProducto,
                PRECIOPRODUCTO: parseFloat(editPrecioProducto)
            };
            await axios.put(`http://localhost:3000/productos/${updatedProduct.IDPRODUCTO}`, updatedProduct);
            setProductos(productos.map(producto => (producto.IDPRODUCTO === updatedProduct.IDPRODUCTO ? updatedProduct : producto)));
            setModalOpen(false);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <>
            <VerticalNavbar />
            <Grid alignItems="center" sx={{ position: 'absolute', top: 120, left: 225 }}>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Box>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id Producto</TableCell>
                                        <TableCell>Nombre producto</TableCell>
                                        <TableCell>Imagen Producto</TableCell>
                                        <TableCell>Precio Producto</TableCell>
                                        <TableCell>Acciones</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productos.map((producto) => (
                                        <TableRow key={producto.IDPRODUCTO}>
                                            <TableCell>{producto.IDPRODUCTO}</TableCell>
                                            <TableCell>{producto.NOMBREPRODUCTO}</TableCell>
                                            <TableCell>{producto.IMAGENPRODUCTO}</TableCell>
                                            <TableCell>{producto.PRECIOPRODUCTO.toString()}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="primary" onClick={() => handleEditProduct(producto)}>Editar</Button>
                                                <Button variant="contained" color="error" onClick={() => handleDeleteProduct(producto.IDPRODUCTO)}>Eliminar</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>

            {/* Modal para editar producto */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        Editar Producto
                    </Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="edit-nombre-producto">Nombre Producto</InputLabel>
                        <Input id="edit-nombre-producto" value={editNombreProducto} onChange={(e) => setEditNombreProducto(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="edit-imagen-producto">Imagen Producto</InputLabel>
                        <Input id="edit-imagen-producto" value={editImagenProducto} onChange={(e) => setEditImagenProducto(e.target.value)} />
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="edit-precio-producto">Precio Producto</InputLabel>
                        <Input id="edit-precio-producto" type="number" value={editPrecioProducto} onChange={(e) => setEditPrecioProducto(e.target.value)} />
                    </FormControl>
                    <Button variant="contained" onClick={handleSaveEdit}>Guardar Cambios</Button>
                </Box>
            </Modal>
        </>
    );
};

export default InventarioProductos;
