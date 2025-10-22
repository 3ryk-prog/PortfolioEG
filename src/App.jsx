import { useState } from 'react'

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
              <img src="../assets/images/eryk.png" alt="zdjecieEryka" />
              <h4>Eryk</h4>
              <p>Skills: and Achievements:</p>
              <ul>
                <li>Manuel Neuer in Rocket League</li>
                <li>Stopped smoking after 5 years</li>
                <li>GitHub expert</li>
                <li>Have new MacBook air, so is rich</li>
              </ul>
            </div>
            <div className="member">
              <img src="../assets/images/giant.png" alt="zdjecieGianta" />
              <h4>Giant</h4>
              <p>Skills and Achievements:</p>
              <ul>
                <li>Diamond 3, division 3 in Rocket League one year ago</li>
                <li>Retired legendary footballer of Iskra Pszczyna</li>
                <li>HTML expert</li>
                <li>Have new MacBook air, so is rich</li>
              </ul>
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