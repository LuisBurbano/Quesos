import "./ImagenCasa.css";
import casa1 from "../assets/img/queso1.jpg";
import casa2 from "../assets/img/queso2.jpg";
import casa3 from "../assets/img/queso3.png";
import casa4 from "../assets/img/queso4.jpg";
import casa5 from "../assets/img/queso5.jpeg";
const ImagenCasa =(props)=> {
    return (
        <div className="galeria" id="galeria_in">
            <section>
                <img src={casa1} alt="Casa 1" />
                <img src={casa2} alt="Casa 2" />
                <img src={casa3} alt="Casa 3" />
                <img src={casa4} alt="Casa 4" />
                <img src={casa5} alt="Casa 5" />
            </section>
        </div>         


    );
}

export default ImagenCasa;