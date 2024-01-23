import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const About = () => {
   return (
     <>
          <Navigation />
          <div class="about-us-container">
          <h1>About Us</h1>
          <section class="about_content">
               <div class="image-container">
                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2023/08/Chestnut-mushrooms-a223a78.jpg?quality=90&resize=440,400" alt="Mushroom Background"></img>
               </div>
               <div class="text-container">
               <p>Welcome to our Mushroom Scanner App! We are passionate about making mushroom identification easy and accessible for everyone.</p>
               <p>Our team of experts and enthusiasts have come together to create a user-friendly app that allows you to identify various mushroom species with just a snap. Whether you are a forager or a curious nature lover, our app is designed to help you explore the fascinating world of mushrooms safely.</p>
               <p>Join us on this journey as we bring the wonders of mycology to your fingertips. Happy scanning!</p>
               </div>
          </section>
          </div>
          <Footer />
     </>
  );
};

export default About;
