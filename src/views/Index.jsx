import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import ImagenCasa from '../components/ImagenCasa.jsx';
import Produccion from '../components/Produccion.jsx';
import Header from '../components/Header.jsx';

const Index = () => {
    return (
        <>
            <Navbar />
            <ImagenCasa />
            <Header title="PRODUCCIÓN DE QUESO ARTESANAL" />
            <Produccion />
            <Footer />
        </>
    );
}
export default Index;