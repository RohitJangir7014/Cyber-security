import React from 'react'
import '../components/Tip.css'
import Header from './Header'
import Vikash from './lock.png'
import I from './lock2.png'
import a from './i3.png'
import v from './vectore1.png'
import va from './Vector (2).png'
import vb from './Vector (3).png'
import vc from './Vector (4).png'
import ha from './Vector (5).png'
import hb from './vector6.png'
import hh from './vector7.png'
import Foter from './Foter'

const Tipsg = () => {
  return (
    <div className='bg text-white '>
     <Header/>
     <div><h1 className='text-center pt-5 b'>Our Services</h1>
     <p className='text-center pt-5'>The average cost of a data breach is $3.92 million. We help to prevent breaches <br></br> and keep your company safe. Fortune 500 companies, government agencies, <br></br>educational, and non-profits are among the organizations targeted every day <br></br>– many of whom are woefully unprepared to respond to security incidents. <br></br>That’s where <br></br>we come in. With decades of combined experience, thousands of hours of practice, and core values from our time in service, we will use our skill set to <br></br>secure your environment.</p>
    
     </div>

    <div className='container'>
      <div className='row mt-5'>
        <div className='col-sm-12 col-md-3 col-lg-3'>
          <img src= {Vikash} alt=''/>
          <h5>Penetration Testing</h5>

        </div>
        <div className='col-sm-12 col-md-3 col-lg-3'>
          <img src= {I} alt=''/>
          <h5>Security Auditing</h5>

        </div>
        <div className='col-sm-12 col-md-3 col-lg-3'>
          <img src= {a} alt=''/>
          <h5>Cyber Forensics</h5>

        </div>
        <div className='col-sm-12 col-md-3 col-lg-3 '>
          <img src= {Vikash} alt=''/>
          <h5>Custom Solutions</h5>

        </div>

      </div>

    </div>

<div>
  <h1 className='text-center mt-5 b'>Penetration Testing</h1>
  <h4 className='text-center mt-5 b'>From large Fortune 500 companies to local small businesses, we have helped hundreds <br></br>of companies secure their most valuable data. Our solutions are customized to <br></br>meet your needs and requirements. When youre ready to secure your <br></br>organization, choose us as your partner.</h4>
  
</div>


<div className='container mt-5 pt-5'>
  <div className='row'>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5'   src= {v}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>

    </div>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img  className='ms-5'    src= {va}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>

    </div>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5'    src= {vb}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>

    </div>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5'    src= {vc}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>

    </div>

  </div>
</div>


<div className='container mt-5 pt-5'>
  <div className='row'>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5' src={ha}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>
             
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5'  src={hb}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>
             
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5'  src={hh}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>
             
    </div>
    <div className='col-sm-12 col-md-3 col-lg-3'>
      <img className='ms-5'  src={va}alt=''/>
      <p>A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.</p>
      <button type="button" class="btn btn-success">read more</button>
             
    </div>
      
  </div>

</div>


<div className='text-center mt-5'><h1 className='b'>Cyber Forensics</h1>Our talented engineers have decades of experience assisting customers with their security needs.
<p></p>

</div>



<div className='b text-center'>
<h1>See How We Can Secure Your Assets</h1>

</div>

<div className='container mt-5'>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>


    <div className='text-center mt-5'>
    <button type="button" class="btn btn-success">send massage</button>
    </div>

<pre>




















































































































</pre>

    <Foter/>
    </div>
  )
}

export default Tipsg