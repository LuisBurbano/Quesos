import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, TextField } from '@mui/material';
import axios from 'axios';
import VerticalNavbar from '../components/VerticalNavbar';

const Administrador = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchDate, setSearchDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/compras');
                const allOrders = response.data;
                setOrders(allOrders);
                setFilteredOrders(allOrders); // Al principio, mostramos todas las órdenes
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchData();
    }, []);

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Formato deseado: DD/MM/AAAA
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    // Función para filtrar órdenes por nombre del cliente
    const handleSearchName = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchName(searchTerm);
        const filtered = orders.filter(order => order.NOMBRECLIENTE.toLowerCase().includes(searchTerm));
        setFilteredOrders(filtered);
    };

    // Función para filtrar órdenes por fecha
    const handleSearchDate = (e) => {
        const searchTerm = e.target.value;
        setSearchDate(searchTerm);
        const filtered = orders.filter(order => order.FECHAORDEN.includes(searchTerm));
        setFilteredOrders(filtered);
    };

    return (
        <>
            <VerticalNavbar />
            <Typography variant="h5" color="white" gutterBottom sx={{ position: 'absolute', top: 15, left: 225, zIndex: 9999 }}>
                <b>Productos a entregar</b>
            </Typography>

            <Grid alignItems="center" sx={{ position: 'absolute', top: 120, left: 225 }} >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card sx={{ minWidth: 1250, width: '100%' }}>
                        <CardContent>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                Todas las órdenes
                            </Typography>
                            <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ marginBottom: '10px' }}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        label="Buscar por nombre"
                                        variant="outlined"
                                        fullWidth
                                        value={searchName}
                                        onChange={handleSearchName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <TextField
                                        label="Buscar por fecha"
                                        variant="outlined"
                                        fullWidth
                                        type="date"
                                        value={searchDate}
                                        onChange={handleSearchDate}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Orden</TableCell>
                                            <TableCell>Nombre Cliente</TableCell>
                                            <TableCell>Contacto Cliente</TableCell>
                                            <TableCell>Dirección</TableCell>
                                            <TableCell>FECHA</TableCell>
                                            <TableCell>Precio total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filteredOrders.map((order) => (
                                            <TableRow key={order.IDORDEN}>
                                                <TableCell>{order.IDORDEN}</TableCell>
                                                <TableCell>{order.NOMBRECLIENTE}</TableCell>
                                                <TableCell>{order.CELULARCLIENTE}</TableCell>
                                                <TableCell>{order.DIRECCIONCLIENTE}</TableCell>
                                                <TableCell>{formatDate(order.FECHAORDEN)}</TableCell>
                                                <TableCell>{order.PRECIOTOTAL}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Administrador;
