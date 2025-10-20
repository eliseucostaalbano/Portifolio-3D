import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useMediaQuery } from "react-responsive"
import SalaHacker from "../components/SalaHacker"
import Loader from "../components/Canvas"
import { calcularTamanhos } from "../constants/index"
import { Leva } from 'leva';
import Alvo from "../components/Alvo"
import ReactLogo from "../components/ReactLogo"
import Cubo from "../components/Cubo"
import Aneis from "../components/Anel"
import HeroCamera from "../components/HeroCamera"
import Botão from "../components/Botão"


const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const tamanhos = calcularTamanhos(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
         Olá eu sou Eliseu <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Trabalho com Sites e Jogos</p>
      </div>
      <div className="w-full h-full absolute inset-0">
       <Canvas className="w-full h-full ">
        <Suspense fallback={<Loader />}>
        <Leva hidden />
           <PerspectiveCamera makeDefault position={[0, 0, 30]} />
           <HeroCamera isMobile={isMobile}>
                       <SalaHacker scale={tamanhos.deskScale} position={tamanhos.deskPosition} rotation={[0, -Math.PI, 0]} />
           </HeroCamera>
            <group>
              <Alvo  position={tamanhos.targetPosition} />
              <ReactLogo position={tamanhos.reactLogoPosition} />
              <Cubo position={tamanhos.cubePosition} />
              <Aneis position={tamanhos.ringPosition} />
            </group>
           <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
        </Canvas> 
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contato" className="w-fit">
          <Botão nome="Vamos Trabalhar Juntos" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero