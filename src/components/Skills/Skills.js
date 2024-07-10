import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills =()=> {
  return (
   <section id='skills'>
    <span className="skillTitle">What I Do</span>
    <span className="skillDescription">
    I am a versatile software developer with a strong foundation in multiple programming languages and technologies. My proficiency spans across Python, Java, PHP, and JavaScript (React), allowing me to tackle a wide range of development tasks with ease. I excel in both front-end and back-end development, with a keen eye for designing efficient and scalable databases. My expertise in web development enables me to create dynamic, responsive, and user-friendly applications that meet modern standards and best practices.
        </span>
    <div className="skillsBars">
        <div className="skillBar">
            <img src={UIDesign} alt="Uidesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Backend Development</h2>
                <p>With my expertise in Python and PHP, I can develop robust and scalable backend systems for web applications. I am proficient in building RESTful APIs, handling server-side logic, and integrating various services and databases. My ability to utilize both Python and PHP ensures I can choose the best tool for the task, optimizing performance and development efficiency.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="webdesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Full-Stack Development</h2>
                <p>With my expertise in Python, Java, PHP, and JavaScript (React), I can develop comprehensive full-stack applications. I am adept at creating seamless interactions between the front-end and back-end, ensuring smooth data flow and user experience. My ability to handle both client-side and server-side logic allows me to build robust and scalable web applications from start to finish.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="appdesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Database Architecture and Management</h2>
                <p>My proficiency in database design allows me to create optimized and scalable database solutions. I can design complex database schemas, ensure data integrity, and implement efficient data retrieval strategies. This skill enables me to support the backend infrastructure of applications, ensuring reliable and efficient data handling and storage.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Skills
