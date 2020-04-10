import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Section from './section'
import Navbar from './navbar'
import * as serviceWorker from './serviceWorker';
import Footer from './footer'


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Section/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
