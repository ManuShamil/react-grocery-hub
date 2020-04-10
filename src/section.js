import React from 'react';
import './App.scss';
import '.'

function Section() {
  return (
    <div class="container">
<section class="section-main padding-y">
<main class="card">
<div class="card-body">
<div class="row">
<aside class="col-lg col-md-3 flex-lg-grow-0">
            <h6>MY MARKETS</h6>
            <nav class="nav-home-aside">
                <ul class="menu-category">
                    <li><a href="#">Fruits and Vegetables</a></li>
                    <li><a href="#">Foodgrains, Oil and Malsala</a></li>
                    <li><a href="#">Bakery, Cakes and Dairy</a></li>
                    <li><a href="#">Beverages</a></li>
                    <li><a href="#">Snacks and Branded Foods</a></li>
                    <li><a href="#">Beauty and Hugiene</a></li>
                    <li><a href="#">Clean and Household</a></li>
                    <li class="has-submenu"><a href="#">More items</a>
                        <ul class="submenu">
                            <li><a href="#">Kitchen, Garden and Pets</a></li>
                            <li><a href="#">Eggs Meat and Fish</a></li>
                            <li><a href="#">Gourment and World Food</a></li>
                            <li><a href="#">Baby Care</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
</aside>  
<div class="col-md-9 col-xl-7 col-lg-7">

<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/banners/banner_136.png" alt="First slide"/> 
    </div>
    <div class="carousel-item">
      <img src="images/banners/banner_136.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img src="images/banners/banner_136.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
</div>
<div class="col-md d-none d-lg-block flex-grow-1">
<aside class="special-home-right">
<h6 class="bg-blue text-center text-white mb-0 p-2">Deals of the day</h6>
<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/offers/detergent.jpg" alt="First slide"/> 
    </div>
    <div class="carousel-item">
      <img src="images/offers/detergent.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img src="images/offers/detergent.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</aside>
</div>



</div>
</div>
  </main>
</section>
</div>
 );
}

export default Section;