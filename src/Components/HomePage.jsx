import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Title from './Title/Title';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className='container'>
        <Title subtitle="Our Services" title="What We Offer" />
        <Services />
      </div>
    </div>
  );
};

export default HomePage;
