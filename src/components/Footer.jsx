import "./Footer.css";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import whatsapp from "../assets/img/whatsapp.svg";
const Footer = () => {
    return (
        <footer className="pie">
            <div className="redes_sociales">
                <h4>Redes Sociales:</h4>
                <div className="facebook">
                    <a href="https://www.facebook.com/p/Inti-Churi-100057352064394/?paipv=0&eav=AfZJH1srRgWBwWlgnPkkVB4A0a4zO0-DIYZfZeQqfNu9zGPIojbAewQu2sBZy-2GQFY&_rdr" target="_blank">
                        <img src={facebook} alt="facebook" /></a>
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank">
                        <img src={instagram} alt="instagram" /></a>
                </div>
                <div className="whatsapp">
                    <a href="
                https://wa.me/+52593961805008?text=Hola%20Queser%C3%ADa%20Inti%20Churi%20deseo%20hacer%20un%20pedido:
                " target="_blank">
                        <img src={whatsapp} alt="whatsapp" /></a>
                </div>
            </div>
            <div className="informacion_contacto">
                <h3>Información de contacto de la fundación:</h3>
                <p>Dirección: km 19 Vía Riobamba por Gallo Rumi, sector Kasaichi, Ecuador</p>
                <p>Teléfono: +593 990 872 053 </p>
                <p>Correo electrónico: info@intichuri.com</p>
            </div>
            

            <div className="mapa_sitio">
                <h3>Mapa del sitio</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.1234568828552!2d-78.88330275369616!3d-1.6081242779572749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3115963de9929%3A0x6905673e5759ab61!2sGallo%20Rumi!5e0!3m2!1ses!2sec!4v1706241931315!5m2!1ses!2sec" width="600px" height="450px" ></iframe>
            </div>
            <div className="politicas">
                <h3>Políticas:</h3>
                
                    <p>Política de privacidad</p>
                    <br />
                    <p>Términos y condiciones</p>
                    <br />
                    <p>Política de cookies</p>
                
            </div>
            <div className="derechos">
                <p>Todos los derechos reservados &copy; 2024 Quesería Kasaychi Runakunapak Tantari</p>
            </div>
        </footer>
    );
}

export default Footer;