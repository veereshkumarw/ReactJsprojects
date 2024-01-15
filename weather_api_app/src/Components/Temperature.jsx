import React from 'react';
import './CSS/style.css';

const Temperature = () => {
  return (
    <>
    <div className="container">
      <div className='box'>

        <div className='inputdata'>
          <input type="search" className="inputField"
            onChange={
              (event) => {

              }
            } />

        </div>
      </div>

      <div className="info">
        <h2 className="information">
          <i className="fa-solid fa-street-view"></i>
        </h2>
        <h1 className="temp">
          5.2 C
        </h1>
        <h3 className="tempmin_max">
          Min :5.25 C | Max :5.25C
        </h3>
      </div>

      <div className="wave-one"></div>
      <div className="wave-two"></div>
      <div className="wave-three"></div>
      </div>
    </>
  )
}

export default Temperature
