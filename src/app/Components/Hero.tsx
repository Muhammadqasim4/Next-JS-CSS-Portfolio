import React from 'react';
import Image from 'next/image';

import profile from '../assets/Image.jpg';

const Hero = () => (
  <section className="hero" id="home">
    <div>
      <h2>Hello, I am <span>Muhammad Qasim</span></h2>
      <p>
        A passionate <span>Full Stack Developer and AI</span> enthusiast.
      </p>
    </div>
    <Image
      src={profile}
      alt="Profile"
      width={300}
      height={300}
      className="rounded-full shadow-lg"
    />
  </section>
);

export default Hero;
