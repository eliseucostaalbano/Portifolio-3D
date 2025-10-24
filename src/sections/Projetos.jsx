import { meusProjetos } from "../constants/index"

const Projetos = () => {
  const projetoAtual = meusProjetos[0];
  return (
    <section className= "c-space my-20">
      <p className="head-text">Meus Projetos</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
       <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
        <div className="absolute top-0 right-0">
          <img src={projetoAtual.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"  />
        </div>

        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={projetoAtual.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={projetoAtual.logo} alt="logo" />
          </div>
          
           <div className="flex flex-col gap-5 text-white-600 my-5">
             <p className="text-white text-2xl font-semibold animatedText">{projetoAtual.titulo}</p>

             <p className="animatedText">{projetoAtual.desc}</p>
            <p className="animatedText">{projetoAtual.subdesc}</p>
           </div>

       </div>
      </div>
    </section>
  )
}

export default Projetos