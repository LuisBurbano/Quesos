import { useState, useEffect } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Producto from '../components/Producto.jsx';
import axios from 'axios';
import { Button, Modal, TextField, Typography } from '@mui/material';

const Productos = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [productos, setProductos] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [cedula, setCedula] = useState('');
    const [contacto, setContacto] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroPrecio, setFiltroPrecio] = useState('');
    const handleFiltrar = () => {
        
        const productosFiltrados = productos.filter(producto => {
            const nombreCoincide = producto.NOMBREPRODUCTO.toLowerCase().includes(filtroNombre.toLowerCase());
            const precioCoincide = producto.PRECIOPRODUCTO.toString().includes(filtroPrecio);
            return nombreCoincide && precioCoincide;
        });
        setProductos(productosFiltrados);
    };


    const agregarProductoAlCarrito = (IDPRODUCTO, NOMBREPRODUCTO, PRECIOPRODUCTO) => {
        const productoExistente = productosEnCarrito.find(producto => producto.IDPRODUCTO === IDPRODUCTO);
        if (productoExistente) {
            const nuevosProductos = productosEnCarrito.map(producto => {
                if (producto.IDPRODUCTO === IDPRODUCTO) {
                    return { ...producto, PRODUCTOCANTIDAD: producto.PRODUCTOCANTIDAD + 1 };
                }
                return producto;
            });
            setProductosEnCarrito(nuevosProductos);
        } else {
            const nuevoProducto = { IDPRODUCTO, NOMBREPRODUCTO, PRECIOPRODUCTO, PRODUCTOCANTIDAD: 1 };
            setProductosEnCarrito([...productosEnCarrito, nuevoProducto]);
        }
    };

    const eliminarProductoDelCarrito = (IDPRODUCTO) => {
        const nuevosProductos = productosEnCarrito.filter(producto => producto.IDPRODUCTO !== IDPRODUCTO);
        setProductosEnCarrito(nuevosProductos);
    };

    const toggleMostrarCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    const handlePagar = () => {
        handleOpenModal();
    };

    const handleConfirmPurchase = async () => {
        try {
            const currentDate = new Date().toJSON().split('T')[0];
            const total = productosEnCarrito.reduce((acc, producto) => acc + parseFloat(producto.PRECIOPRODUCTO) * producto.PRODUCTOCANTIDAD, 0);

            if (!customerName || !deliveryAddress) {
                console.error('Los campos obligatorios deben ser completados');
                return;
            }

            const response = await axios.post('http://localhost:3000/compras', {
                NOMBRECLIENTE: customerName,
                APELLIDOCLIENTE: customerLastName,
                CEDULACLIENTE: cedula,
                DIRECCIONCLIENTE: deliveryAddress,
                CELULARCLIENTE: contacto,
                FECHAORDEN: currentDate,
                productos: productosEnCarrito,
                TOTAL: total
            });

            console.log('Respuesta del backend al realizar la compra:', response.data);

            handleCloseModal();
        } catch (error) {
            console.error('Error al realizar la compra:', error);
        }
    };

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/productos');
                setProductos(response.data);
            } catch (error) {
                console.error('Error fetching productos:', error);
            }
        };

        fetchProductos();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setCustomerName('');
        setDeliveryAddress('');
    };

    return (
        <>
            <Navbar />
            <Header title="Productos" />
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <TextField
                    label="Filtrar por nombre"
                    variant="outlined"
                    value={filtroNombre}
                    onChange={(e) => setFiltroNombre(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <TextField
                    label="Filtrar por precio"
                    variant="outlined"
                    value={filtroPrecio}
                    onChange={(e) => setFiltroPrecio(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleFiltrar}>Filtrar</Button>
            </div>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={toggleMostrarCarrito}>
                    <div className="count-products">
                        <span id="contador-productos">{productosEnCarrito.length}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-cart">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </div>
            </div>
            <div className={`container-cart-products ${mostrarCarrito ? '' : 'hidden-cart'}`}>
                {productosEnCarrito.map((producto) => (
                    <div className="row-product" key={producto.IDPRODUCTO}>
                        <div className="cart-product">
                            <div className="info-cart-product">
                                <span className="cantidad-producto-carrito">{producto.PRODUCTOCANTIDAD}</span>
                                <p className="titulo-producto-carrito">{producto.NOMBREPRODUCTO}</p>
                                <span className="precio-producto-carrito">{producto.PRECIOPRODUCTO ? `$${producto.PRECIOPRODUCTO}` : 'Precio no disponible'}</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="icon-close"
                                onClick={() => eliminarProductoDelCarrito(producto.IDPRODUCTO)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                ))}

                <div className="cart-total hidden">
                    <h3>Total:</h3>
                    <span className="total-pagar">${productosEnCarrito.reduce((total, producto) => total + parseFloat(producto.PRECIOPRODUCTO) * producto.PRODUCTOCANTIDAD, 0)}</span>
                    <button onClick={handlePagar}>Pagar</button>
                </div>
                <p className="cart-empty">{productosEnCarrito.length === 0 ? 'El carrito está vacío' : ''}</p>
            </div>

            <div className="container-items">
                {productos.map(producto => (
                    <Producto
                        key={producto.IDPRODUCTO}
                        titulo={producto.NOMBREPRODUCTO}
                        precio={producto.PRECIOPRODUCTO.toString()}
                        textoBoton="Comprar"
                        imagen={producto.IMAGENPRODUCTO}
                        onClick={() => agregarProductoAlCarrito(producto.IDPRODUCTO, producto.NOMBREPRODUCTO, producto.PRECIOPRODUCTO)}
                    />
                ))}
            </div>

            <Footer />
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
                    <Typography variant="h4" gutterBottom>
                        <h2 id="modal-title" style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>Confirmar compra</h2>

                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <p style={{ marginBottom: '20px', textAlign: 'center' }}>Comprar</p>
                    </Typography>
                    <TextField
                        label="Nombre del cliente"
                        variant="outlined"
                        fullWidth
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Apellido del cliente"
                        variant="outlined"
                        fullWidth
                        value={customerLastName}
                        onChange={(e) => setCustomerLastName(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Cedula"
                        variant="outlined"
                        fullWidth
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Dirección de entrega"
                        variant="outlined"
                        fullWidth
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Numero de contacto"
                        variant="outlined"
                        fullWidth
                        type='number'
                        value={contacto}
                        onChange={(e) => setContacto(e.target.value)}
                        style={{ marginBottom: '15px' }}
                    />

                    <Button variant="contained" color='primary' sx={{ width: '250px', height: '60px', borderRadius: 6, fontSize: '1rem', marginTop: '20px' }} onClick={handleConfirmPurchase}>Confirmar compra</Button>
                </div>
            </Modal>
        </>
    );
}

export default Productos;
