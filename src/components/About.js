import React from 'react'
import aa from './aa.png'
import rt from './rt.png'
import ra from './ra.png'
import rb from './rb.png'
import Header from './Header'
import Foter from './Foter'


const Aboutas = () => {

  return (
    <div className='fig text-light'>
      <Header/>
     
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img className='width mt-4' style={{ width: '70%', marginLeft: '2rem', height: '22rem'  }} src={aa} />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mt-5 mr-5'>
              <h1 style={{ fontSize: '3.3rem' }}>We are changing the old Education <br /> System</h1>
              <div className='d-flex gap-5 mt-5'>
                <button className='btn btn-success w-25'>Courses</button>
                <button className='btn btn-light w-25'>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <h1>Our <span className='text-success'> Journey :</span></h1>
            <div className='d-flex gap-2'>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </div>
        </div>
      </div>



      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
                <h2>01. Starting from the Dorm room:</h2>
                <p>RNS Group of Companies started as a small dorm room IT Company back in 2016, in Jaipur. The Company also faced a critical shortage of skilled and affordable manpower in order to drive business from Colleges/Universities.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
          <img style={{width:'50%', height:'auto'}}  src = {rt}/>
          </div>

        </div>

      </div>
     

      <div className='container '>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
              <h2>01. Starting from the Dorm room:</h2>
              <p>RNS Group of Companies started as a small dorm room IT Company back in 2016, in Jaipur. The Company also faced a critical shortage of skilled and affordable manpower in order to drive business from Colleges/Universities.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
          <img  style={{width:'50%', height:'auto',}}  src = {ra}/>
          </div>

        </div>

      </div>

      <div className='container '>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
              <h2>01. Starting from the Dorm room:</h2>
              <p>RNS Group of Companies started as a small dorm room IT Company back in 2016, in Jaipur. The Company also faced a critical shortage of skilled and affordable manpower in order to drive business from Colleges/Universities.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 '>
          <img  style={{width:'50%', height:'auto',}}  src = {rb}/>
          </div>

        </div>

      </div>
     
      <div className='container '>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
              <h2>01. Starting from the Dorm room:</h2>
              <p>RNS Group of Companies started as a small dorm room IT Company back in 2016, in Jaipur. The Company also faced a critical shortage of skilled and affordable manpower in order to drive business from Colleges/Universities.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
          <img  style={{width:'50%', height:'auto',}}  src = {ra}/>
          </div>

        </div>

      </div>

      <div className='container mt-3'>
      <h2 style={{color:'red'}}>Our Secret to Success:</h2>
      </div>

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
              <h5>Your success is what matters to us, so we have created <br/> the simplest process which will lead you to your<br/> success, which includes: Graduation degree from India’s Top<br/> most Universities, along with Guaranteed placements.<br/> In just 3 simple steps.</h5>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
          <img  style={{width:'50%', height:'auto',}}  src = {rb}/>
          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
            <h2>1. Talent Hunt:</h2>
            <p>We conduct a talent hunt exam at the national level for 12th-pass students and enroll the selected students in our TIPS-G program according to their interests.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
          <img  style={{width:'50%', height:'auto',}}  src = {ra}/>
          </div>

        </div>

      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
            <h2>2. Talent Hunt:</h2>
            <p>We conduct a talent hunt exam at the national level for 12th-pass students and enroll the selected students in our TIPS-G program according to their interests.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 '>
          <img  style={{width:'50%', height:'auto',}}  src = {rt}/>
          </div>

        </div>

      </div>
     
    <Foter/>
   
      
    </div>
  )
}

export default Aboutas
