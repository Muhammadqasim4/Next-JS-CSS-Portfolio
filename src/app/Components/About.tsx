import React from 'react';
import Image from 'next/image';

import profile from '../assets/Image.jpg';

const About = () => (
  <section className="about" id="about">
    <h2>About Me</h2>
    <p>
      I am Muhammad Qasim, a university student passionate about becoming a full-stack developer. 
      I am currently exploring the field of AI to integrate it into my work as a developer.
    </p>
    <Image
      src={profile}
      alt="About Profile"
      width={250}
      height={250}
      className="rounded-full shadow-lg"
    />
  </section>
);

export default About;
