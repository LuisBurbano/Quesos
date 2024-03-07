import { useState } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Producto from '../components/Producto.jsx';

const Productos = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const agregarProductoAlCarrito = (titulo, precio) => {
        const nuevoProducto = { id: Date.now(), titulo, precio };
        setProductosEnCarrito([...productosEnCarrito, nuevoProducto]);
    };

    const eliminarProductoDelCarrito = (id) => {
        const nuevosProductos = productosEnCarrito.filter(producto => producto.id !== id);
        setProductosEnCarrito(nuevosProductos);
    };

    const toggleMostrarCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };
    const handlePagar = () => {
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(productosEnCarrito),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Respuesta de la API al enviar los datos del carrito:', data);
        // })
        // .catch(error => {
        //     console.error('Error al enviar los datos del carrito:', error);
        // });
        console.log('Productos a pagar:', productosEnCarrito);
    };

    return (
        <>
            <Navbar />
            <Header title="Productos" />
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
                    <div className="row-product" key={producto.id}>
                        <div className="cart-product">
                            <div className="info-cart-product">
                                <span className="cantidad-producto-carrito">1</span>
                                <p className="titulo-producto-carrito">{producto.titulo}</p>
                                <span className="precio-producto-carrito">${producto.precio}</span>
                                
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="icon-close"
                                onClick={() => eliminarProductoDelCarrito(producto.id)}
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
                    <span className="total-pagar">${productosEnCarrito.reduce((total, producto) => total + parseFloat(producto.precio), 0)}</span>
                    <button onClick={handlePagar}>Pagar</button>
                </div>
                <p className="cart-empty">{productosEnCarrito.length === 0 ? 'El carrito está vacío' : ''}</p>
            </div>

            <div className="container-items">
                <Producto titulo="Queso Mozarella 200g" precio="2.50" textoBoton="Comprar" imagen="https://assets.isu.pub/document-structure/210508134923-b154df264289a8a6cbb6f94a63b0de9d/v1/e1ff44755d4347f63db1d4713a2b8dde.jpg" onClick={() => agregarProductoAlCarrito("Queso Mozarella 200g", "2.50")} />
                <Producto titulo="Queso Mozarella 200g" precio="2.50" textoBoton="Comprar" imagen="https://assets.isu.pub/document-structure/210508134923-b154df264289a8a6cbb6f94a63b0de9d/v1/e1ff44755d4347f63db1d4713a2b8dde.jpg" onClick={() => agregarProductoAlCarrito("Queso Mozarella 200g", "2.50")} />
                <Producto titulo="Queso Moz. de orégano 250g" precio="2.50" textoBoton="Comprar" imagen="https://assets.isu.pub/document-structure/210508134923-b154df264289a8a6cbb6f94a63b0de9d/v1/ff3235ddb4b041625715e401c7741c9f.jpg" onClick={() => agregarProductoAlCarrito("Queso Moz. de orégano 250g", "2.50")} />
                <Producto titulo="Dedos de Queso Mozarella" precio="2.50" textoBoton="Comprar" imagen="https://rapimerque.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6Mzg2NTYsInB1ciI6ImJsb2JfaWQifX0=--e2cd7164e64bc59f261949a2f03a0e1730e4680b/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbODAwLDgwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--cef66509c9cdc75663c0eefd9421db1d2ea4fead/congelados-domicilio-rapimerque-supermercados-cali%20(2).png?locale=es" onClick={() => agregarProductoAlCarrito("Dedos de Queso Mozarella", "2.50")} />
                <Producto titulo="Queso En Láminas" precio="2.50" textoBoton="Comprar" imagen="https://www.salineritotqb.com/web/image/product.template/12155/image" onClick={() => agregarProductoAlCarrito("Queso En Láminas", "2.50")} />
                <Producto titulo="Queso pequeño Mozarella 100g" precio="2.50" textoBoton="Comprar" imagen="https://productoslacteossuperior.com/wp-content/uploads/2021/05/queso-fresco-125-g-2_Mesa-de-trabajo-1-1-300x300.jpg" onClick={() => agregarProductoAlCarrito("Queso pequeño Mozarella 100g", "2.50")} />
            </div>

            <Footer />
        </>
    );
}

export default Productos;
