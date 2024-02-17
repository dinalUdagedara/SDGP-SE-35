import React from 'react';
import { TiWeatherShower} from "react-icons/ti";
import { GrUserManager } from "react-icons/gr";
import { GoGraph } from "react-icons/go";
import { PiPlant } from "react-icons/pi";
import { GiPlantRoots } from "react-icons/gi";

import {Grid} from '@mui/material';



function CardComp(){
    return(
      <div>
        <div className='cards-container'>
          <br></br>
        <h1 className='card-title' ><span style={{ color: 'black' }}>Main</span> services</h1>
        <Grid container spacing ={2} margin={2}>
          <Grid item xs ={6} md={4}>
            <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <TiWeatherShower size={60} />
            </div>
        <div className='card-text'>
          <h3 className='heading'><span style={{ color: 'black' }}>Weather </span> prediction</h3>
          <p className='disc'>Provides real-time weather forecasts and alerts for optimal farming decisions.</p>
       </div>
        </div>
      </div>
          </Grid>
          <Grid item xs={6} md={4}>
          <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <GrUserManager size={60}/>
            </div>
        <div className='card-text'>
          <h3 className='heading'><span style={{ color: 'black' }}>Agri </span> Advisory</h3>
          <p className='disc'>Offers personalized and timely guidance on crop selection, pest management, and farming techniques.</p>
       </div>
        </div>
      </div>
          </Grid>
          <Grid item xs={6} md={4}>
          <div className="card">
          <div className="card-content">
            <div className="card-icon">
            <GoGraph size={60} />
            </div>
        <div className='card-text'>
          <h3 className='heading'><span style={{ color: 'black' }}>Market </span> Price</h3>
          <p className='disc'>Displays current market prices and trends for various crops, enabling data-driven selling decisions.</p>
       </div>
        </div>
      </div>
      <br></br>
          </Grid>
          <Grid item xs={6} md={4}>
          <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <PiPlant size={60}/>
            </div>
        <div className='card-text'>
          <h3 className='heading'><span style={{ color: 'black' }}>Crop </span> Guidence</h3>
          <p className='disc'>Shares comprehensive and localized information on best practices for cultivating different crops.</p>
       </div>
        </div>
      </div>
          </Grid>
          <Grid item xs={6} md={4}>
          <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <GiPlantRoots size={60}/>
            </div>
        <div className='card-text'>
          <h3 className='heading'><span style={{ color: 'black' }}>Pest </span> Alerts</h3>
          <p className='disc'>Timely notifications via app on prevalent pests, aiding officers in identifying, managing, and advising farmers on pest control measures for crop protection.</p>
       </div>
        </div>
      </div>
          </Grid>
          <Grid item xs={6} md={4}>
          <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <GrUserManager size={60}/>
            </div>
        <div className='card-text'>
          <h3 className='heading'><span style={{ color: 'black' }}>Other </span>Services </h3>
          <p className='disc'>Timely notifications via app on prevalent pests, aiding officers in identifying, managing, and advising farmers on pest control measures for crop protection.</p>
       </div>
        </div>
      </div>
          </Grid>
        </Grid>
        </div>
     </div>
    );
}
export default CardComp;