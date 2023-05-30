import React from 'react'
import './Dashboard.css';
import PropTypes from 'prop-types'
//higit
export default function Header(propes) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#jaison_branch">{propes.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link">About</a>
        </li>
      </ul>

      <form class="d-flex" role="search">
        <div class="logo" >
        <a href="#"><img src="https://tse1.mm.bing.net/th/id/OIP.241daTypjHH0xZ_3crJyQwHaHv?w=194&h=203&c=7&r=0&o=5&pid=1.7" alt="Logo" /></a>
        </div>
      </form> 
    </div>
  </div>
</nav>
  )
}
Header.defaultProps={
  title: "Test App"

}