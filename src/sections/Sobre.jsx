import React from "react";

const Sobre = () => {
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
        
      </div>
    </section>
  );
};

export default Sobre;
