import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt='About Img' />
              <p>Hellow My name is William Paulovitz, I'm a full stack engineer currently seeking empolment oppertunities.
                </p>
            </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__cards"> </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
