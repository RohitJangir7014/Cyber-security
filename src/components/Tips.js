import React from 'react'
import Header from './Header'
import './Tip.css'
import v from './vaar.png'
import va from './var.png'
import md from './dc.png'
import dc from './md.png'
import { FaRegCompass } from "react-icons/fa6";
import { RiCursorLine } from "react-icons/ri";
import { CiMedal } from "react-icons/ci";
import Foter from './Foter'

const Tips = () => {
  return (
    <div className='bg'>
      <Header />

      <div className='mx-auto'>

        <h1 className='text-center ' style={{ color: "green" }}>
          Your cybersecurity <br></br>
          journey starts here.
        </h1>
        <p className='text-center mt-5 ' style={{ color: "green" }}>Develop your skills with guided training and prove your expertise with industry
          certifications. Become a market-ready cybersecurity professional.</p>
        <div className=' text-center'>
          <button className=' bg-success btn p-3 px-5 text-light fs-6'>Get Enrolled</button>
        </div>
      </div>

      <div className='container'>
        <div className='row mt-5 pt-5'>
          <div className='col-sm-12 col-md-6 col-lg-6'>

            <div>
              <div class="card" style={{ width: '18rem' }}>

                <div class="card-body" style={{ backgroundColor: "green" }}>
                  <img style={{ width: '100% ' }} src={v} alt='' />
                  <h5 class="card-title mt-5 text-center">Get certified with</h5>
                  <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                  <h5 className='text' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 mt-3'>

            <div>
              <div class="card" style={{ width: '18rem' }}>

                <div class="card-body" style={{ backgroundColor: "green" }}>
                  <img style={{ width: '100% ' }} src={va} alt='' />
                  <h5 class="card-title mt-5 text-center">Get certified with</h5>
                  <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                  <h5 className='text' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>



      <div className='text-center '>
        <h1 className='mt-5' style={{ color: 'green' }}>100+</h1>
        <h4 className='text-light'>Learners advancing in cybersecurity.</h4>
        <h5 className='text' style={{ color: 'green' }}>Get Enrolled</h5>

      </div>



      <div className='container'>
        <div className='row mt-5 pt-5'>
          <div className='col-sm-12 col-md-6 col-lg-6'>

            <div>
              <div class="card" style={{ width: '18rem' }}>

                <div class="card-body" style={{ backgroundColor: "green" }}>
                  <img style={{ width: '100% ' }} src={md} alt='' />
                  <h5 class="card-title mt-5 text-center">Get certified with</h5>
                  <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                  <h5 className='text text-center' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 mt-3'>

            <div>
              <div class="card" style={{ width: '18rem' }}>

                <div class="card-body" style={{ backgroundColor: "green" }}>
                  <img style={{ width: '100% ' }} src={dc} alt='' />
                  <h5 class="card-title mt-5 text-center">Get certified with</h5>
                  <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                  <h5 className='text text-center' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className='text-center text-light mt-5'>
        <h1> TIPS-G Specialization Courses</h1>
      </div>


      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3 mt-3 '>
            <div class="card" >

              <div class="card-body" style={{ backgroundColor: "green" }}>
                <img className=' img-fluid' src={v} alt='' />
                <h5 class="card-title mt-5 text-center">CPTS</h5>
                <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                <h5 className='text text-center' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-3 col-lg-3 mt-3 ps-3'>
            <div class="card" >

              <div class="card-body" style={{ backgroundColor: "green" }}>
                <img className=' img-fluid' src={va} alt='' />
                <h5 class="card-title mt-5 text-center">CPTS</h5>
                <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                <h5 className='text text-center' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-3 col-lg-3 mt-3 ps-4'>
            <div class="card">

              <div class="card-body" style={{ backgroundColor: "green" }}>
                <img className=' img-fluid' src={md} alt='' />
                <h5 class="card-title mt-3 text-center">CPTS</h5>
                <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                <h5 className='text text-center' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-3 col-lg-3 mt-3 ps-4'>
            <div class="card" >

              <div class="card-body" style={{ backgroundColor: "green" }}>
                <img className=' img-fluid' src={dc} alt='' />
                <h5 class="card-title mt-4 text-center">CPTS</h5>
                <p class="card-text text-center" style={{ backgroundColor: 'green' }}>TIPS-G</p>
                <h5 className='text text-center' style={{ backgroundColor: 'green' }}>Get Enrolled</h5>
              </div>
            </div>

          </div>

        </div>

      </div>



      <div className='text-name mt-5 text-center' style={{ color: 'green' }}>
        <h1>Why TIPS-G Cyber-Security?</h1>
        <p>Prepare for your future in cybersecurity with interactive, guided training and industry  <br></br>
          certifications. Learn the skills needed to stand out from the competition.</p>
      </div>



      <div className='container mx-auto'>
        <div className='row text-center mt-5'>
          <div className='col-sm-12 col-md-4 col-lg-4 mt-5 '>
            <div class="card bg text-white border border-white" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title"><FaRegCompass /></h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-5">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 mt-5'>
            <div class="card bg text-white border border-white" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title"><RiCursorLine /> </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-5">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 mt-5'>
            <div class="card bg text-white border border-white" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title"><CiMedal />
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-5">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>
            </div>

          </div>

        </div>

      </div>
      <div className='container'>
        <div className='row text-center mt-5 mx-auto'>
          <div className='col-sm-12 col-md-4 col-lg-4 mt-5'>
            <div class="card bg text-white border border-white" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title"><FaRegCompass /></h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-5">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 mt-5'>
            <div class="card bg text-white border border-white" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title"><RiCursorLine /> </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-5">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>
            </div>

          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 mt-5'>
            <div class="card bg text-white border border-white" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title"><CiMedal />
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary mt-5">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>
            </div>

          </div>

        </div>

      </div>



      <div className='text-center mt-5 text-white'>
        <h1>Frequently Asked Questions</h1>
        <h2 style={{ color: 'green' }}>FAQ</h2>
      </div>

      <div className='container'>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item mt-5 bg-dark">
            <h2 class="accordion-header bg-dark">
              <button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-5 bg-dark">
            <h2 class="accordion-header bg-dark">
              <button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-5 bg-dark">
            <h2 class="accordion-header bg-dark">
              <button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-5 bg-dark">
            <h2 class="accordion-header bg-dark">
              <button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-5 bg-dark">
            <h2 class="accordion-header bg-dark">
              <button class="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

      </div>
    <Foter/>
    </div>
  )
}

export default Tips