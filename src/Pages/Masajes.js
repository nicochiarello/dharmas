import ImgHeader from "../assets/header-masajes.jpg";
import NavbarPages from "../components/Navbar/NavbarPages";
import ImgMasaje from "../assets/masaje.jpg";
import Footer from "../components/Footer";

const Masajes = () => {
    return (
        <>
            <NavbarPages />
            <header className="index-green relative">
                <img
                    src={ImgHeader}
                    alt="img header"
                    className="w-full h-[80vh] object-cover opacity-[calc(60%)] mix-blend-luminosity "
                />
            </header>
            <main className="max-w-6xl mx-auto font-gabriela">
                <div className="flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] py-10 px-20 m-auto transform-section">
                    <h3 className="text-5xl">Masajes</h3>
                    <p className="text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra sit duis et penatibus eu.{" "}
                    </p>
                    <p className="text-base font-urbanist">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eu, suspendisse dignissim accumsan, tortor. Suspendisse
                        elit, senectus massa et amet odio. Lacinia quis nibh
                        tortor, consequat aliquam sit vel. Risus, dui vulputate
                        nisl et. Purus arcu cras diam at etiam viverra
                        condimentum ut. Volutpat
                    </p>
                </div>
                <div className="bg-[#C4C4C4] p-16 grid grid-cols-2 gap-10 mb-20">
                    <div className="flex flex-col gap-10">
                        <h4 className="text-5xl font-gabriela">Comparativa</h4>
                        <p className="text-base font-urbanist">
                            90'' minutos: <br /> Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Eu, suspendisse
                            dignissim accumsan, tortor. Suspendisse elit,
                            senectus massa et amet odio. Lacinia quis nibh
                            tortor, consequat aliquam sit vel. Risus, dui
                            vulputate nisl et.{" "}
                        </p>

                        <p className="text-base font-urbanist">
                            120'' minutos: <br /> Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Eu, suspendisse
                            dignissim accumsan, tortor. Suspendisse elit,
                            senectus massa et amet odio. Lacinia quis nibh
                            tortor, consequat aliquam sit vel. Risus, dui
                            vulputate nisl et.{" "}
                        </p>
                    </div>
                    <div className="index-green">
                        <img
                            src={ImgMasaje}
                            alt="imagen masaje"
                            className="w-full h-[400px] object-cover opacity-[calc(60%)] mix-blend-luminosity "
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Masajes;
