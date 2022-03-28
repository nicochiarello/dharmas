import React from "react";
import Navbar from "../components/Navbar/Navbar";
import massages from "../assets/imagen.jpg";

const Index = () => {
  return (
    <div className=" w-full overflow-x-hidden font-gabriela">
      <Navbar
        clase={
          "absolute navbar-green top-0 h-[calc(90px)] flex flex-col justify-around items-center w-full font-gabriela text-white z-50"
        }
      />
      <div className=" w-full h-screen index-green realtive ">
        <img
          className=" w-full h-full object-cover opacity-[calc(60%)] mix-blend-luminosity"
          src={massages}
          alt=""
        />
        <div className="absolute right-[calc(8%)] top-[calc(45%)] w-[calc(55%)]">
          <p className=" text-[calc(20px)] text-white font-gabriela">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos est voluptatem, reprehenderit nostrum autem explicabo
            ipsa.
          </p>
        </div>
        <span class="absolute bottom-0 right-[calc(50%)] inline-block animate-bounce rounded-full p-2 bg-teal-400 text-white text-sm">
          <svg
            class="w-2 h-2 mx-auto"
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
      <div className=" h-fit bg-white w-full text-black flex flex-col items-center justify-center px-9 py-6 text-center gap-4">
        <h3 className=" text-2xl">¡Hola! Soy Sandra!</h3>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptate cumque modi voluptas rem?
        </p>
        <p className=" text-[calc(9px)] font-urbanist ">
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
        <div className=" w-36 h-6 bg-btn flex justify-around rounded-[calc(20px)] items-center font-urbanist font-semibold px-3">
          <p>Conóceme </p>
          <i class="bx bx-right-arrow-alt text-lg"></i>
        </div>
      </div>
      <div className=" w-full h-fit py-4 bg-gray-300 flex flex-col justify-center items-center">
        <div>
          <h3 className="text-xl">Cursos</h3>
        </div>
        <div className=" w-[calc(80%)]">
          <p className=" text-[calc(10px)] text-center font-urbanist">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, impedit earum reprehenderit ipsam quibusdam nulla? A
            sunt accusamus sint incidunt, officiis ea fugiat iusto tempora.
          </p>
        </div>
        <div className=" w-full grid grid-cols-4 grid-rows-1 gap-6 px-6 py-2">
          <div className=" w-full h-[calc(16rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap ">
                <p>Curso 1</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[calc(16rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap ">
                <p>Curso 1</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[calc(16rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap ">
                <p>Curso 1</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[calc(16rem)] rounded-[calc(10px)] relative overflow-hidden">
            <img
              className=" w-full h-full object-cover absolute z-0"
              src="https://picsum.photos/1200"
              alt=""
            />
            <div className=" relative z-10 text-[calc(8px)] h-full ">
              <div className=" absolute bottom-[calc(8%)] left-[calc(8%)] text-white font-roboto-slap ">
                <p>Curso 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-72 bg-slate-700 flex px-8 py-6">
        <div className=" w-[calc(50%)] flex flex-col justify-around py-5 text-white">
          <div>
            <h3 className=" text-xl">Masajes</h3>
          </div>
         
            <p className=" text-[calc(10px)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi
              dolorum veniam perferendis! Amet nam nisi vel aspernatur
              consequuntur repellat.
            </p>
            <p className=" text-[calc(10px)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi
              dolorum veniam perferendis! Amet nam nisi vel aspernatur
              consequuntur repellat.
            </p>
        
          <div className=" w-28 h-6 text-[calc(12px)] text-black bg-white flex justify-around rounded-[calc(20px)] items-center font-urbanist font-semibold px-3">
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
    </div>
  );
};

export default Index;
