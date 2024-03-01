import './Carta.css'

const Carta = (props) => {
    return(
        <div class="elemento_gal">
            <article>
                <img src={props.imagen} alt="" width={props.width} height={props.height}/>                
            </article>
            <div class="descripcion">
                <h3>{props.title}</h3>
                <p>{props.descripcion} </p>
            </div>
        </div>
    );
}

export default Carta;