import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Sobre from './sections/Sobre.jsx'
import Projetos from './sections/Projetos.jsx'
import Clientes from './sections/Clientes.jsx'
import Experiencias from './sections/Experiencias.jsx'
import Contato from './sections/Contato.jsx'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Clientes />
      <Experiencias />
      <Contato />
      
      </main>
  )
}

export default App