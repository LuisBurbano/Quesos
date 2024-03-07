import './Producto.css'

const Producto = (props) => {
    return (

        <div class="item">
            <figure>
                <img src={props.imagen} alt="producto" />
            </figure>
            <div class="info-product">
                <h2>{props.titulo}</h2>
                <p class="price">${props.precio}</p>
                <button class="btn-add-cart" onClick={props.onClick}>{props.textoBoton}</button>
            </div>
        </div>
    );
}

export default Producto;