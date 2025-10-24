import Globe from "react-globe.gl";
import Botão from "../components/Botão";
import { useState } from "react";

const Sobre = () => {

  const [copiaSuccesso, setCopiaSuccesso] = useState(false);

const LidarCopia = () => {
    navigator.clipboard.writeText('eliseualbano57@gmail.com');
    setCopiaSuccesso(true);

    setTimeout(() => {
      setCopiaSuccesso(false);
    }, 2000);
  };


  return (
    <section className="text-white-800 c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="Foto 1'" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Oi, eu sou Eliseu Costa</p>
              <p className="grid-subtext">
                Com 2 anos de experiência, eu aperfeiçoei minhas habilidades em
                desenvolvimento frontend e backend, criando sites dinâmicos e
                responsivos e também em criação de Jogos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="Foto 2" className="w-full h-fit sm:h-[276px] object-contain" />
            <div>
               <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">Eu me especializo em uma variedade de linguagens, frameworks e ferramentas que me permitem construir aplicações robustas e escaláveis.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
           <div className="grid-container">
             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
               height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -3.7327, lng: -38.5267, text: 'Fortaleza, Ceara - Brasil', color: 'white', size: 100 }]}
              />
             </div>
             <div>
               <p className="grid-headtext">Eu sou Flexível com fusos horários e localizações</p>
              <p className="grid-subtext">Estou baseado em Fortaleza, Ceará - Brasil e aberto a trabalho remoto em todo o mundo.</p>
               <Botão nome="Me Contate" isBeam containerClass="w-full mt-10" />
             </div>
           </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="Foto 3" className="w-full h-fit sm:h-[266px] object-contain" />
            <div>
              <p className="grid-headtext">Minha Paixão por Programação</p>
              <p className="grid-subtext">
                Eu adoro resolver problemas e construir coisas através do código. Programação não é apenas minha
                profissão—é minha paixão. Gosto de explorar novas tecnologias e aprimorar minhas habilidades.
              </p>
            </div>
            </div>
        </div>

       <div className="xl:col-span-1 xl:row-span-3">
         <div className="grid-container">
            <img src="/assets/grid4.png" alt="Foto 4" className="w-full h-fit md:h-[126px] sm:h-[276px] object-contain sm:object-top" />
            <div className="space-y-2">
             <p className="grid-subtext text-center">Me contate</p>
             <div className="copy-container" onClick={LidarCopia}>
               <img src={copiaSuccesso ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">eliseualbano57@gmail.com</p>
             </div>
            </div>
         </div>
       </div>
      </div>
    </section>
  );
};

export default Sobre;
