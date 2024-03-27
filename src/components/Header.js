import React from 'react'
import '../components/Tip.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>

     

      {/* ////////////////////////////////////// */}



      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <NavLink to="/">
    <a class="navbar-brand" href="#">Tipsg <span className='text-success btn btn-success text-light'>Cyber </span></a>
              </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav d-flex gap-5 mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink to='/About'>
        <a class="nav-link active" aria-current="page" href="#">About</a>
                    </NavLink>
        </li>
        <li class="nav-item">
          
          <NavLink to='/couse'>
          <a class="nav-link" href="#">Couse</a>
                    </NavLink>
        </li>
        <li class="nav-item">
          
          <NavLink to="/Tips">
          <a class="nav-link" href="#">Tips</a>
                    </NavLink>
        </li>



      <NavLink to="/contect">
      <p className='text-dark mt-2'>contect</p>
      </NavLink>


       
      
      </ul>
      <form class="d-flex gap-5">
      <NavLink to="/Login">
                      <p className='text-dark'>login</p>
                    </NavLink>
     <NavLink to="/Sign">
                    <p class='me-5 text-dark'>Sign</p>
                  </NavLink>
      </form>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Header