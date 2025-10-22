import { useState } from 'react'
import eryk from '../assets/images/eryk.png';
import giant from '../assets/images/giant.png';
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Our programming portfolio</h1>
        <nav id='nav'>
          <h3><a href="#about">About us</a></h3>
          <h3><a href="#projects">Our projects</a></h3>
          <h3><a href="#contact">Contact</a></h3>
        </nav>
      </header>

      <main>
        {/* ABOUT US */}
        <section id="about">
          <h3>About us</h3>
          <div className="team">
            <div className="member">
              <img src={eryk} alt="zdjecieEryka" />
              <h4>Eryk</h4>
              <p>Skills:</p>
            </div>
            <div className="member">
              <img src={giant} alt="zdjecieGianta" />
              <h4>Giant</h4>
              <p>Skills:</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h3>Our Projects</h3>
          <div className="projects">
            <div className="project-card">
              <h4>Projekt 1</h4>
              <p>Krótki opis projektu.</p>
              <a href="#">Zobacz więcej</a>
            </div>
            <div className="project-card">
              <h4>Projekt 2</h4>
              <p>Krótki opis projektu.</p>
              <a href="#">Zobacz więcej</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h3>Contact</h3>
          <form>
            <input type="text" placeholder="Twoje imię" />
            <input type="email" placeholder="Twój e-mail" />
            <textarea placeholder="Wiadomość"></textarea>
            <button type="submit">Wyślij</button>
          </form>
        </section>
      </main>

      <footer>
        &copy; 2025 Our Programming Portfolio
      </footer>
    </>
  )
}

export default App