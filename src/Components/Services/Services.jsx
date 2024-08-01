import React from 'react';
import './Services.css';
import patioService from '../../assets/Patios.jpg'; 
import driveService from '../../assets/Driveways.jpg'; 
import stonewallService from '../../assets/Stonewalls.jpg'; 
import drivewayService from '../../assets/road-svgrepo-com.svg';
import stoneService from '../../assets/work-building-svgrepo-com.svg';
import walkwayService from '../../assets/footprints-svgrepo-com.svg';

function Services() {
  return (
    <div className='services'>
      <div className='service'>
        <img src={patioService} alt="Patio Service" />
        <div className='caption'>
          <img src={walkwayService} alt="Patios and Walkways"  className='svg-fill'/>
          <p>Patios and Walkways</p>
        </div>
      </div>
      <div className='service'>
        <img src={driveService} alt="Driveway Service" />
        <div className='caption'>
          <img src={drivewayService} alt="Driveways and Steps" className='svg-fill'/>
          <p>Driveways and Steps</p>
        </div>
      </div>
      <div className='service'>
        <img src={stonewallService} alt="Stonewall Service" />
        <div className='caption'>
          <img src={stoneService} alt="Stonewalls" className='svg-fill'/>
          <p>Stonewalls</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

