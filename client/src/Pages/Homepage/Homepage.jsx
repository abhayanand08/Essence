import React from 'react';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header'
import About from '../../components/About/About';
import Blogs from '../../components/Blogs/Blogs';

const Homepage = () => {
  return (
    <div className='main-home'>
        <Navbar />
        <Header />
        <About />
        <Blogs />
    </div>
  )
}

export default Homepage