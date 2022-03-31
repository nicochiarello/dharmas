import React from "react";
import NavbarPages from "../components/Navbar/NavbarPages";
import ImgHeader from "../assets/header-contact.jpg";
import ImgContacto from "../assets/img-contact.jpg";
import FormContact from "../components/FormContact";
import { SiWhatsapp } from "react-icons/si";
import Footer from "../components/Footer";

const Contacto = () => {
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
                <div className="flex flex-col justify-center items-center gap-20 bg-[#C4C4C4] p-10 m-auto transform-contact">
                    <div className="grid grid-cols-2 p-10 gap-10">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-gabriela text-4xl">Contacto</h1>
                            <p className="font-gabriela text-xl">
                                Si te parece bien, escribeme por WhatsApp y te
                                ayudo con lo que necesites.
                            </p>
                            <button className="btn-contact rounded-2xl font-urbanist text-base font-semibold py-2 px-3 w-3/4 flex flex-row justify-center items-center gap-3">
                                <p>Hablemos por WhatsApp</p>
                                <span>
                                    <SiWhatsapp />
                                </span>
                            </button>
                            <p className="font-urbanist text-base">
                                O si tienes alguna duda en específico, escribela
                                en el formulario y yo me comunico contigo.
                            </p>
                            <FormContact />
                        </div>
                        <div className="index-green">
                            <img
                                src={ImgContacto}
                                alt="imagen meditación"
                                className="w-full h-full object-cover items-center opacity-[calc(60%)] mix-blend-luminosity"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contacto;
