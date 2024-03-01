import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Carta from '../components/Carta.jsx';
import logo from '../assets/img/logot.png';
import collage from '../assets/img/collage.jpg';

const Fundacion = () => {
    return (
        <>
            <Navbar />
            <Header title="Conoce más de nuestra fundación" />
            <Carta imagen={logo} height="200px" title="Información" descripcion="Por iniciativa de varios personas promueven la unidad de las seis comunidades existentes en una organización que aglutine en una sola surgiendo como la fundación Casaichi Runacunapac tantari Inti Churi." />
            <Header title="Historia de la Fundación Kasaychi Runakunapak Tantari Inti Churi" />
            <section class="fundacion-info">
                <table>
                    <tr>
                        <th>Hechos</th>
                        <th>Fecha</th>
                    </tr>
                    <tr>
                        <td>Implementación de un molino de grano apoyada por la promoción humana</td>
                        <td>1981</td>
                    </tr>
                    <tr>
                        <td>Obtención de una hectárea de terreno para la sede social donado por la comunidad de Casaichi Chinipamba y San Antonio</td>
                        <td>1984</td>
                    </tr>
                    <tr>
                        <td>Unificación de 4 escuelas uni docentes del sector para superar las deficiencias educativas</td>
                        <td>1988</td>
                    </tr>
                    <tr>
                        <td>Construcción de 8 km de canal de riego para cuatro comunidades</td>
                        <td>1992</td>
                    </tr>
                    <tr>
                        <td>Cambio de denominación de la Escuela Dr. Ricardo Galarza por Centro educativo Comunitario Inti Churi</td>
                        <td>1994</td>
                    </tr>
                    <tr>
                        <td>Ampliación de oferta educativa hasta décimo año de educación básica</td>
                        <td>2004</td>
                    </tr>
                    <tr>
                        <td>Obtención de acuerdo de la DINEIB el funcionamiento de Bachillerato Técnico Agropecuario y ascenso de categoría a la Unidad Educativa</td>
                        <td>26/11/2008</td>
                    </tr>
                    <tr>
                        <td>Incorporación bachilleres de la primera promoción U.E.C.I.B Inti Churi</td>
                        <td>31/07/2010</td>
                    </tr>
                    <tr>
                        <td>Ejecución de proyecto de mejoramiento ganadero y tecnificación de procesamiento de derivados de la leche ganando al concurso del IESP-MIES</td>
                        <td>2010</td>
                    </tr>
                </table>
            </section>
            <Carta imagen={collage} width="90%"/>
            <Footer />
        </>
    );
}
export default Fundacion;