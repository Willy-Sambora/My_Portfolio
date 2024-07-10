import React from 'react'
import './works.css'
import { Link } from 'react-scroll'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'


const Works = ()=> {
  return (
    <div>
      <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">
        I have developed dynamic web applications and robust backend systems using Python, PHP, and JavaScript (React). My projects include creating RESTful APIs, designing efficient databases, and implementing interactive user interfaces. Each project demonstrates my ability to deliver scalable, efficient, and user-friendly solutions tailored to meet specific needs.
        </span>
        <div className="worksImgs">
            <img src={img1} alt="" className="worksImg"/>
            <img src={img2} alt="" className="worksImg"/>
            <img src={img3} alt="" className="worksImg"/>
            <img src={img4} alt="" className="worksImg"/>
            <img src={img5} alt="" className="worksImg"/>
            <img src={img6} alt="" className="worksImg"/>  
        </div>
        <button className="worksBtn">See More</button>
      </section>
    </div>
  )
}

export default Works
