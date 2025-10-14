

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
         Olá eu sou Eliseu <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Sou um Desenvolvedor Full-stack e de Jogos</p>
      </div>
    </section>
  )
}

export default Hero