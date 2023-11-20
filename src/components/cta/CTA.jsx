import React from 'react';
import './cta.css';
import Brand from '../../components/brand/Brand'


function CTA() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-6'>
          <h1>Notre Équipe D'experts</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
        </div>
        <div className='col-12 col-md-6 col-lg-6'>
          <h1>Notre Équipe D'experts</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
        </div>

      </div>
      <Brand />
    </div>
  )
}

export default CTA
