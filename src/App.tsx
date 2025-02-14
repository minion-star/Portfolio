import Header from './header/Header'
import AboutMe from './aboutme/AboutMe'
import Home from './home/Home'
import Services from './services/Services'
import Skills from './skills/Skills'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><AboutMe /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App;
