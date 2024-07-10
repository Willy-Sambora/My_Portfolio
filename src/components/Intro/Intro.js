import React from 'react'
import './intro.css'
import bg from '../../assets/willy.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'


const Intro =() =>{
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Sambora</span> <br/>Software Developer</span>
            <p className="introPara">I am a skilled software developer with experience in creating <br/> aesthetic and functional systems and websites.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me"className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default Intro
