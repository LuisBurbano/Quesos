import "./Produccion.css";
import perfil1 from "../assets/img/perfil_1.jpg";
import perfil2 from "../assets/img/perfil_2.jpg";
import Header from "./Header.jsx";
import logo from "../assets/img/logoi.webp";
const Produccion = () => {
    return (
        <div className="casas" id="mostrar">
            <div className="testimonios">
                <div className="container">
                    <div className="testimonio">

                        <img src={logo} alt="Foto Perfil" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="testimonio">
                        <p>"El queso Inti Churi de Mezcla con Hierbas Finas es una sinfonía de sabores frescos y aromas herbales. La mezcla perfecta de quesos seleccionados se combina con hierbas finas para crear una experiencia única. Este queso es una oda a la frescura y un placer para los sentidos. Descubre el arte de los quesos con Inti Chur" - Ana G.</p>
                        <img src={perfil1} alt="Foto Perfil" />
                    </div>

                    <div className="testimonio">
                        <p>"El queso Inti Churi Gourmet de Cabra es una exquisitez artesanal. Con su suave y cremosa textura, este queso de cabra ofrece una experiencia indulgente. Sus notas delicadamente ácidas y su sabor equilibrado hacen que cada bocado sea una aventura gourmet. Inti Churi lleva la calidad a un nuevo nivel". - Carlos M.</p>
                        <img src={perfil2} alt="Foto Perfil" />
                    </div>
                </div>
                
            </div>

            <Header title="Conoce más de la elaboración" />
            <iframe src="https://www.youtube.com/embed/qrPKuBq4FiI?si=grKQujgpgFMtYg7g" 
            style={{paddingTop:'30px', paddingBottom:'30px'}} ></iframe>
        </div>
    );
}

export default Produccion;