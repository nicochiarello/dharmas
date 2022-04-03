import React from "react";
import NavbarPages from "../components/Navbar/NavbarPages";
import Footer from "../components/Footer";
const SobreMi = () => {
  return (
    <div>
      <NavbarPages />
      <header className="index-green relative">
        <img
          src="https://picsum.photos/1200"
          alt="img header"
          className="w-full h-[80vh] object-cover opacity-[calc(60%)] mix-blend-luminosity "
        />
      </header>
      <main className="max-w-6xl mx-auto font-gabriela">
        <div className="flex flex-col justify-center items-center text-center gap-5 bg-[#C4C4C4] py-14 px-20 m-auto transform-section">
          <h3 className="text-5xl">Quien soy</h3>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit
            duis et penatibus eu.{" "}
          </p>
          <p className="text-base font-urbanist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
            suspendisse dignissim accumsan, tortor. Suspendisse elit, senectus
            massa et amet odio. Lacinia quis nibh tortor, consequat aliquam sit
            vel. Risus, dui vulputate nisl et. Purus arcu cras diam at etiam
            viverra condimentum ut. Volutpat
          </p>
        </div>
        <div className="bg-[#C4C4C4] p-16 grid grid-cols-2 gap-10 mb-20">
          <div className="flex flex-col gap-10">
            <h4 className="text-5xl font-gabriela">Formación</h4>
            <p className="text-base font-urbanist">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              hic rem dolores id! Dolorem, alias optio! Facilis, corrupti animi,
              corporis totam error tenetur ut expedita quo veritatis sit aut
              neque. Ducimus eligendi eveniet quam id fugiat praesentium tempore
              optio minus!
            </p>

            <p className="text-base font-urbanist">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi
              veniam dolorum tempora iusto nihil molestias ullam, repudiandae
              rem sed ex rerum quibusdam nam ducimus nisi eos consequuntur
              corrupti odio itaque, nulla sit officiis. At obcaecati laborum
              corporis minus sequi!
            </p>
          </div>
          <div className="index-green">
            <img
              src="https://picsum.photos/1200"
              alt="imagen masaje"
              className="w-full h-[400px] object-cover opacity-[calc(60%)] mix-blend-luminosity "
            />
          </div>
        </div>
      </main>
      <div className=" w-full h-96 index-green relative my-16">
        <img
          className=" w-full h-full object-cover opacity-50"
          src="https://picsum.photos/1200"
          alt=""
        />
        <div className=" absolute child w-[calc(80vw)] text-center text-[calc(48px)] text-white font-gabriela">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsa
          natus perspiciatis quam minus asperiores odit alias provident corrupti
          illum?
        </div>
      </div>
      <div className="bg-[#C4C4C4] max-w-6xl mx-auto p-16 grid grid-cols-2 gap-10 mb-20">
        <div className="index-green">
          <img
            src="https://picsum.photos/1200"
            alt="imagen masaje"
            className="w-full h-[400px] object-cover opacity-[calc(60%)] mix-blend-luminosity "
          />
        </div>
        <div className="flex flex-col gap-10 py-8">
          <h4 className="text-5xl font-gabriela">Técnicas que utilizo</h4>
          <p className="text-base font-urbanist">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            hic rem dolores id! Dolorem, alias optio! Facilis, corrupti animi,
            corporis totam error tenetur ut expedita quo veritatis sit aut
            neque. Ducimus eligendi eveniet quam id fugiat praesentium tempore
            optio minus!
          </p>

          <p className="text-base font-urbanist">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi
            veniam dolorum tempora iusto nihil molestias ullam, repudiandae rem
            sed ex rerum quibusdam nam ducimus nisi eos consequuntur corrupti
            odio itaque, nulla sit officiis. At obcaecati laborum corporis minus
            sequi!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreMi;
