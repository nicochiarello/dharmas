import React from "react";
import Navbar from "../components/Navbar/Navbar";
import massages from "../assets/imagen.jpg";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <div className=" w-full overflow-x-hidden font-gabriela">
      <Navbar
        clase={
          "absolute navbar-green top-0 h-[calc(120px)] flex flex-col justify-between items-center w-full font-gabriela text-white z-50 h-[calc(12rem)] py-[calc(2rem)] "
        }
      />
      <div className=" w-full h-screen index-green relative">
        <img
          className=" w-full h-full object-cover opacity-[calc(60%)] mix-blend-luminosity"
          src={massages}
          alt=""
        />
        <div className="absolute right-[calc(8%)] top-[calc(45%)] w-[calc(55%)]">
          <p className=" text-[calc(48px)] text-white font-gabriela">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos est voluptatem, reprehenderit nostrum autem explicabo
            ipsa.
          </p>
        </div>
        <span class="absolute bottom-0 right-[calc(50%)] inline-block animate-bounce rounded-full p-8 bg-teal-400 text-white text-2xl">
          <svg
            class="w-4 h-4 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      <div className=" h-fit bg-white w-full text-black flex flex-col items-center justify-center px-36 py-14 text-center gap-4">
        <h3 className=" text-[calc(48px)]">¡Hola! Soy Sandra!</h3>
        <p className=" text-[calc(32px)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptate cumque modi voluptas rem?
        </p>
        <p className=" text-[calc(16px)] font-urbanist ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo commodi,
          perferendis aliquid obcaecati illo veritatis mollitia, aspernatur
          laboriosam alias facilis, veniam earum natus sequi totam reiciendis!
          Similique, eum iste rerum enim earum voluptatum mollitia voluptas.
          Atque eveniet recusandae a officia? Esse vitae in laudantium ullam
          aliquid, officiis suscipit exercitationem temporibus voluptas quidem
          quod cupiditate corporis perferendis accusamus! Voluptatibus alias quo
          obcaecati dolore, minima repellendus ullam explicabo illum eius ipsam
          ab, magni possimus eligendi mollitia harum incidunt aut? Nobis dolorem
          esse, perferendis in delectus cumque amet quidem placeat provident
          excepturi inventore repudiandae nesciunt animi vero facere. Accusamus
          recusandae, eum, architecto laboriosam praesentium, harum dignissimos
          dicta numquam ex id deserunt reiciendis odio veniam necessitatibus
          error doloremque rem impedit cum quidem cupiditate. Veritatis?
        </p>
        <div className=" w-52 h-10 bg-btn flex justify-around rounded-[calc(20px)] items-center font-urbanist font-semibold px-3">
          <p className=" text-[calc(16px)]">Conóceme </p>
          <i class="bx bx-right-arrow-alt text-lg"></i>
        </div>
      </div>
      <div className=" w-full h-fit py-12 bg-gray-300 flex flex-col justify-center items-center">
        <div>
          <h3 className="text-[calc(40px)]">Cursos</h3>
        </div>
        <div className=" w-[calc(80%)]">
          <p className=" text-[calc(16px)] text-center py-2 font-urbanist">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, impedit earum reprehenderit ipsam quibusdam nulla? A
            sunt accusamus sint incidunt, officiis ea fugiat iusto tempora.
          </p>
        </div>
        <div className=" w-full grid grid-cols-4 grid-rows-1 gap-6 px-6 py-2">
          <div className=" w-full h-[calc(34rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap text-[calc(32px)] ">
                <p>Curso 1</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[calc(34rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap text-[calc(32px)] ">
                <p>Curso 2</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[calc(34rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap text-[calc(32px)] ">
                <p>Curso 3</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[calc(34rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap text-[calc(32px)] ">
                <p>Curso 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-[calc(35rem)] bg-slate-700 flex px-8 py-6">
        <div className=" w-[calc(50%)] flex flex-col justify-around py-5 pr-[calc(8%)] text-white">
          <div>
            <h3 className=" text-[calc(40px)]">Masajes</h3>
          </div>

          <p className=" text-[calc(16px)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi
            dolorum veniam perferendis! Amet nam nisi vel aspernatur
            consequuntur repellat.
          </p>
          <p className=" text-[calc(16px)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi
            dolorum veniam perferendis! Amet nam nisi vel aspernatur
            consequuntur repellat.
          </p>

          <div className=" w-36 py-2 text-[calc(16px)] text-black bg-white flex justify-around rounded-[calc(20px)] items-center font-urbanist font-semibold px-3">
            Boton primario
          </div>
        </div>
        <div className=" w-[calc(50%)] bg-blue-400">
          <img
            className=" w-full h-full object-cover"
            src="https://picsum.photos/1200"
            alt=""
          />
        </div>
      </div>
      <div className=" w-full flex h-[calc(35rem)] my-8">
        <div className=" w-[calc(50%)]">calendario</div>
        <div className=" w-[calc(50%)] flex flex-col justify-around py-[calc(2%)]">
          <p className=" text-[calc(40px)]">Mi Agenda</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ipsa iusto fugiat enim quasi cumque quis voluptatibus accusamus aut
            harum deleniti corporis in, dicta facilis consequatur architecto
            commodi odio, quia repellendus accusantium vero maxime esse?
            Pariatur eaque maxime natus sint.
          </p>
          <div className=" w-36 py-2 text-[calc(16px)] text-black bg-btn flex justify-around rounded-[calc(20px)] items-center font-urbanist font-semibold">
            Boton primario
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
