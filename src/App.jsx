import { useState } from 'react'
import emailjs from 'emailjs-com'
import './App.css'
import eryk from './assets/images/eryk.png';
import giant from './assets/images/giant.png';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(
      'service_skolc1x',
      'template_iho2bkm',
      formData,
      'nmvPWeSqX9OeRTb5P'
    )
    .then((result) => {
      alert('Wiadomość wysłana! ✅')
      console.log(result.text)
    }, (error) => {
      alert('Coś poszło nie tak ❌')
      console.log(error.text)
    })
  }

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
              <p><b>Skills: and Achievements:</b></p>
              <br />
              <ul>
                <li>Manuel Neuer in Rocket League</li>
                <li>Stopped smoking after 5 years</li>
                <li>GitHub expert</li>
                <li>Have new MacBook air, so is rich</li>
              </ul>
            </div>
            <div className="member">
              <img src={giant} alt="zdjecieGianta" />
              <h4>Giant</h4>
              <p><b>Skills: and Achievements:</b></p>
              <br />
              <ul>
                <li>Diamond 3, division 3 in Rocket League</li>
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
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Twoje imię" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Twój e-mail" onChange={handleChange} required />
            <input type="number" name="phone" placeholder="Twój numer telefonu" onChange={handleChange} required/>
            <textarea name="message" placeholder="Wiadomość" onChange={handleChange} required></textarea>
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