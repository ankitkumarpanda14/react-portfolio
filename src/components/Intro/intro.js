import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import bg_ankit from '../../assets/Ankit_Image.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <br />
            <span className="IntroText">I am <span className="introName">Ankit</span><br />Software Developer</span>
            <br />
            <p className="introPara"> I am a skilled software developer with <br /> experience in creating frontend applications.</p>
            <br />
            <br />
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        {/* <img src={bg} alt="" className="bg" /> */}
        <img src={bg_ankit} alt="" className="bg" />
    </section>
  );
}

export default Intro;
