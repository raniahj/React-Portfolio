import React from 'react';
import email from '../../assets/images/email icon.png';
import github from '../../assets/images/github icon.jpg';
import linkedin from '../../assets/images/linkedin icon.png';



function Contact() {
  return (
    <section className="Contact" id="contact">
      <h1>Contact Me!</h1>
      <li> <img src={email} width="5%" height="5%" alt="envelope icon"></img>
        <a href="mailto://raniahj06@gmail.com"> raniahj06@gmail.com </a></li>
      <li><a href="https://www.linkedin.com/in/raniah-jeanlys/">
        <img src={linkedin} width="5%" height="5%" alt="linkedin icon"></img>    Linkedin</a></li>
      <li><a href="https://github.com/raniahj">
        <img src={github} width="5%" height="5%" alt="github icon"></img>    GitHub</a></li>
    </section>
  );
}

export default Contact;