import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';

const Eventos = () => {
    return (
        <>
            <Navbar />
            <Header title="Eventos de Carnval de Guaranda" />
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid05e4z8Lf1PBm4Gke1MYTK7UUJYMCGzYQ5dRsrtU1GMkatvP56TaKDv8LPG1vS7Majl%26id%3D100057352064394&show_text=true&width=500"
                width="500" height="498" scrolling="no" frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                style={{ paddingTop: '30px', paddingBottom: '30px', border: 'none', overflow: 'hidden' }} ></iframe>
            <Header title="Eventos culturales" />
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0SvoGgU3qh1o23dn9xj1zByriGsCLza1gVnhHGbFVQvj1dw27bpLoJnVJnuaYKYFWl%26id%3D100057352064394&show_text=true&width=500"
                width="600" height="250" scrolling="no" frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                style={{ paddingTop: '30px', paddingBottom: '30px', border: 'none', overflow: 'hidden' }} ></iframe>
            <Header title="Eventos Musicales" />
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0AwAh91LA7k87k1SqvMW5qFDFkyHJqRRCQPCUpp4v4SCU1X4Zx2NFYfFe44B34ubgl%26id%3D100057352064394&show_text=true&width=500"
                width="700" height="250" scrolling="no" frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                style={{ paddingTop: '30px', paddingBottom: '30px', border: 'none', overflow: 'hidden' }} ></iframe>
            <Footer />
        </>
    );
}
export default Eventos;