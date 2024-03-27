import React from 'react'
import Header from './Header'



const Login = () => {
  return (
    <div className='fig'>
      <Header/>
     
      <div className='container mt-5'>
        <div className='row'>
          <div className=''>
            <div className='sign'>
              <div className='text-center'>
                <h1 className='text-light'>Register</h1>
                <p className='text-light'>Start your learning Journey!</p>
              </div>
              <div className='d-flex align-items-center text-center   '>
                <div className='line'></div>
                <div className='box2 p-2'>
                  <h1 className='text-light'>Tips-G</h1>
                  <button className='btn btn-success fw-bold text-dark '>Cyber-Security</button>
                </div>
                <div className='line'></div>
              </div>

            </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label text-light">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label text-light">Password</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              
              <div className='mb-3 w-50 d-flex  gap-4 mx-auto'>
                <input className='bg-success' type='checkbox' />
                <p className='text-light'>Remember me .</p>
              </div>
              <div className='mx-auto mb-3 w-25 '>
              <button className='btn btn-success w-100 '>Register</button>

              </div>
              <p className='text-center mt-5 text-light'>Don’t have an account ? <span className='text-success'>Register Now</span> </p>
              
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
