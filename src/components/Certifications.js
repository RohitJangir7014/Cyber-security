// import React from 'react'
// // import Navbar from './Navbar'
// import imgd from './img/Unit_ills_full_60884 1.png'
// import t from './img/Group 50.svg'
// import { BsFillLayersFill } from "react-icons/bs";
// import { FaMedal } from "react-icons/fa";
// import { CiClock2 } from "react-icons/ci";
// import logo from './img/image 5.png'
// // import Footer from '../../Footer';
// const Certifications = () => {
//   const data = [
//     {
//       h4: 'TIPS-G Certified',
//       p1: 'Master Diploma in Cyber Security',
//       p2: 'TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates’ hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.',
//       h1: 'MDCS',
//       p3: 'Master Diploma in Cyber Security',
//       p4: '12  Modules',
//       p5: 'Internship Included',
//       p6: 'Duration : 1 Year',
//       btn: 'Download Brochure'
//     },
//     {
//       h4: 'TIPS-G Certified',
//       p1: 'Master Diploma in Cyber Security',
//       p2: 'TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates’ hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.',
//       h1: 'MDCS',
//       p3: 'Master Diploma in Cyber Security',
//       p4: '12  Modules',
//       p5: 'Internship Included',
//       p6: 'Duration : 1 Year',
//       btn: 'Download Brochure'
//     },
//   ]
//   const data2 = [
//     {
//       p:'EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals',
//       btn:'Learn More'
//     },
//     {
//       p:'EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals',
//       btn:'Learn More'
//     },
//     {
//       p:'EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals',
//       btn:'Learn More'
//     },
//     {
//       p:'EC Council is an international cybersecurity certification body, offering career-oriented training and certifications for IT professionals',
//       btn:'Learn More'
//     },
//   ]
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className='container-fluid bg-secondary mt-5'>
//         <div className='row'>
//           <div className='col-lg-12 col-md-12 col-sm-12'>
//             <h1 className='fs-1 fw-bolder  text-center mt-5'>TIPS-G Certifications</h1>
//             <p className='fs-6 text-center mt-5'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
//           </div>
//         </div>
//       </div>
//       <div className='container  text-center'>
//         <button type="button" class="btn btn-success mt-5 w-25 h-25 ">Get Your Demo Class</button>
//       </div>
//       <div className='container mt-5 mb-5'>
//         <div className='row'>
//           {
//             data.map((data) => {
//               return (
//                 <div className='col-lg-12 col-md-12 col-sm-12 '>
//                   <div className='cer p-5 '>
//                     <div className='cer1 d-flex'>
//                       <div className='mt-5 me-5'> <img src={t} alt='' /> </div>
//                       <div className=' me-5'><img src={imgd} alt='' /></div>
//                       <div className=' me-5 mt-3' ><h4>{data.h4} </h4>
//                         <p>{data.p1} </p>
//                         <p>{data.p2} </p>
//                       </div>
//                     </div>
//                     <div>
//                       <h1 className='h5tagtp'>{data.h1} </h1>
//                       <p>{data.p3} </p>
//                     </div>
//                     <div className='line'></div>
//                     <div>
//                       <div className='d-flex justify-content-between  '>
//                         <div className='d-flex gap-2'>
//                           <BsFillLayersFill />
//                           <p>{data.p4} </p>
//                           <FaMedal />
//                           <p>{data.p5} </p>
//                           <CiClock2 />
//                           <p>{data.p6} </p>
//                         </div>
//                         <div>
//                           <button type="button" class="btn btn-success">{data.btn} </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='mt-5'></div>
//                 </div>

//               )
//             })
//           }
//         </div>
//       </div>
//       <div className='container-fluid bg-secondary mt-5'>
//         <div className='row'>
//           <div className='col-lg-12 col-md-12 col-sm-12'>
//             <h1 className='fs-1 fw-bolder  text-center mt-5'>Professional Certifications</h1>
//             <p className='fs-6 text-center mt-5'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
//           </div>
//         </div>
//       </div>
//       <div className='container  mt-5'>
//         <div className='row'>
//           {
//             data2.map((data2) => {
//               return (
//                 <div className='col-lg-6 col-md-6 col-sm-12 text-center' >

//                   <div class="card p-5" >
//                     <img className='mx-auto' src={logo} alt="..." />
//                     <div class="">
//                       <p className='p-4' >{data2.p} </p>
//                       <a href="#" class="btn btn-primary"> {data2.btn} </a>
//                     </div>
//                   </div>
//                   <div className='mt-5'></div>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   )
// }
// export default Certifications

