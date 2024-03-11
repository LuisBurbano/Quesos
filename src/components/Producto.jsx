import './Producto.css'

const Producto = (props) => {
    return (

        <div className="item">
            <figure>
                <img src={props.imagen} alt="producto" />
            </figure>
            <div className="info-product">
                <h2>{props.titulo}</h2>
                <p className="price">${props.precio}</p>
                <button className="btn-add-cart" onClick={props.onClick}>{props.textoBoton}</button>
            </div>
        </div>
    );
}

export default Producto;