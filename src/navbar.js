import React from 'react';
import './App.scss';
import '.'

function Navbar() {
  return (
    <header class="section-header">
    <section class="header-main border-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-2 col-lg-3 col-md-12">
                    <a href="http://bootstrap-ecommerce.com" class="brand-wrap">
                    </a>
                </div>
                <div class="col-xl-6 col-lg-5 col-md-6">
                    <form action="#" class="search-header">
                        <div class="input-group w-100">
                            <input type="text" class="form-control" placeholder="Search"/>
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="submit">
                                <i class="fa fa-search"></i> Search
                              </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="widgets-wrap float-md-right">
                        <div class="widget-header mr-3">
                            <a href="#" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-user"></i>
                                    <span class="notify">3</span>
                                </div>
                                <small class="text"> My profile </small>
                            </a>
                        </div>
                        <div class="widget-header mr-3">
                            <a href="#" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-comment-dots"></i>
                                    <span class="notify">1</span>
                                </div>
                                <small class="text"> Message </small>
                            </a>
                        </div>
                        <div class="widget-header mr-3">
                            <a href="#" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-store"></i>
                                </div>
                                <small class="text"> Orders </small>
                            </a>
                        </div>
                        <div class="widget-header">
                            <a href="#" class="widget-view">
                                <div class="icon-area">
                                    <i class="fa fa-shopping-cart"></i>
                                </div>
                                <small class="text"> Cart </small>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </section>

    
    <nav class="navbar navbar-main navbar-expand-lg border-bottom">
      <div class="container">
    
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-bars text-muted mr-2"></i> Categories </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Machinery</a>
                <a class="dropdown-item" href="#">Electronics</a>
                <a class="dropdown-item" href="#">Home textile</a>
                <a class="dropdown-item" href="#">Home and kitchen</a>
                <a class="dropdown-item" href="#">Service and equipment</a>
                <a class="dropdown-item" href="#">Healthcare items</a>
                <a class="dropdown-item" href="#">Toys and Hobbies</a>
              </div>
            </li>
              <li class="nav-item">
               <a class="nav-link" href="#">Daily Fresh</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Offers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-md-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">English</a>
                  <a class="dropdown-item" href="#">Malayalam</a>
                  <a class="dropdown-item" href="#">Hindi</a>
                  <a class="dropdown-item" href="#">Tamil</a>
                </div>
              </li>
           </ul>
        </div>
      </div>
    </nav>
    </header>

 );
}

export default Navbar;