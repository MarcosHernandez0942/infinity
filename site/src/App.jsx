import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Rendimiento from './components/Rendimiento.jsx'
import Interior from './components/Interior.jsx'
import Tecnologia from './components/Tecnologia.jsx'
import Cotizador from './components/Cotizador.jsx'
import Distribuidores from './components/Distribuidores.jsx'
import Footer from './components/Footer.jsx'
import SceneNav from './components/SceneNav.jsx'
import useActiveSection from './hooks/useActiveSection.js'

const SECTION_IDS = ['diseno', 'rendimiento', 'interior', 'tecnologia', 'cotiza', 'distribuidores', 'footer']

function App() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <>
      <Nav activeId={activeId} />
      <SceneNav activeId={activeId} />
      <Hero />
      <Rendimiento />
      <Interior />
      <Tecnologia />
      <Cotizador />
      <Distribuidores />
      <Footer />
    </>
  )
}

export default App
