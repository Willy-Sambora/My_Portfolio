import React, {useRef} from 'react'
import './clients.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Adobe from '../../assets/adobe.png'
import Facebook from '../../assets/facebook.png'
import FacebbokIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Clients = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hmgo91k', 'template_oym5h7l', form.current, {
        publicKey: 'HQ7Dj2WiLf7jPpv6-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert('Email Sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
    <div>
      <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDescription">
                I have had the opportunity to work with a diverse group of companies.
                Sme of the notable companies i have worked for includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="walmart" className="clientImg"/>
                <img src={Adobe} alt="adobe" className="clientImg"/>
                <img src={Microsoft} alt="microsoft" className="clientImg"/>
                <img src={Facebook} alt="facebook" className="clientImg"/>
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDescription">Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name = 'your_email'/>
                <textarea name="message" rows="5" placeholder='Your Message'className='message' ></textarea>
                <button type='submit' className="submitBtn" value="send">Submit</button>
                <div className="links">
                    <img src={FacebbokIcon} alt="socials" className="link" />
                    <img src={TwitterIcon} alt="socials" className="link" />
                    <img src={YouTubeIcon} alt="socials" className="link" />
                    <img src={InstagramIcon} alt="socials" className="link" />
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Clients
