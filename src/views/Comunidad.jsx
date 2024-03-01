import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Carta from '../components/Carta.jsx';
import collage from '../assets/img/collage2.jpg';

const Comunidad = () => {
    return (
        <>
            <Navbar />
            <Header title="Comunidad" />
            <Carta title="Nuestro origen" descripcion="La población de las comunidades de la Fundación Inti Churi, de acuerdo a la información recopilada es de 753 personas, con un crecimiento de 2 por ciento anual.
En cuanto a la mortalidad infantil (menores de un año) es de 1 por cada mil nacidos vivos. El ritmo de crecimiento poblacional de este sector tiende a descenderse.
La tasa de mortalidad es de 4 por mil. Este fenómeno empieza a desacelerar a partir del año 2010 y con una tendencia fuerte de reducirse a un más. Igual fenómeno viene ocurriendo con la tasa de fecundidad porque ante del año 2010 cada hogar tenía un número de hijos de un promedio de 9 a 10. Este fenómeno ha ido bajando hasta que en la actualidad llegan a tener dos hijos como máximo. Con respecto a la población por sexo existe un relativo equilibrio." />
            <Carta imagen={collage} width="90%" />
            <Footer />
        </>
    );
}
export default Comunidad;
