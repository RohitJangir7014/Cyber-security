import React from 'react'
import Header from './Header'


// import { NavLink } from 'react-router-dom'

const Singin = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className=''>
            <div className='sign'>
              <div className='text-center'>
                <h1>Register</h1>
                <p>Start your learning Journey!</p>
              </div>
              <div className='d-flex align-items-center text-center   '>
                <div className='line'></div>
                <div className='box2 p-2'>
                  <h1>Tips-G</h1>
                  <button className='btn btn-success fw-bold text-dark '>Cyber-Security</button>
                </div>
                <div className='line'></div>
              </div>

            </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Confirm Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Password</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Country</label>
                <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
                <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className='mb-3 w-50 d-flex  gap-4 mx-auto'>
                <input className='bg-success' type='checkbox' />
                <p>E-mail me product updates and newsletters.</p>
              </div>
              <div className='mx-auto mb-3 w-25 '>
              <button className='btn btn-success w-100 '>Register</button>

              </div>
              <p className='text-center mt-5'>By registering you agree to our Terms of Service, Privacy Policy and Acceptable Use Policy</p>
              
          </div>
        </div>
      </div>
      <div className='text-center '><p>Already Have a Account ? <span className='text-success' >Login</span></p></div>
      <p className='text-center mt-2'>© 2023 TIPS-G Cyber Security</p>
      {/* <Footer/> */}
    </div>
  )
}

export default Singin
