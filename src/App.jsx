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
              <img src="https://cdn.discordapp.com/attachments/756610372739530803/1429608092366147655/image.png?ex=68fa0d8a&is=68f8bc0a&hm=313d4cf5c9e2d1f297759552f6db4c89865ebd10072f3b6511f71cf547f291f4&" alt="Kurwo" />
              <h4>Eryk</h4>
              <p>Skills:</p>
            </div>
            <div className="member">
              <img src="https://cdn.discordapp.com/attachments/756610372739530803/1429607394182430874/image.png?ex=68fa0ce3&is=68f8bb63&hm=65b760e46ad204afdd6fca0fd26e0aef7f6e3da62be31dceeaacfe94cb2ca7d9&" alt="Kolega" />
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