import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import "./contact.css";

const Contact = () => {
   return (
     <>
          <Navigation />

 
          <section id="contact" class="contact">
            <div class="contact_cont">

              <div class="section-title">
                <h2>Contact Us</h2>
                <p>If you have any questions, concerns, or feedback, please don't hesitate to contact us by sending an email, and we'll get back to you as soon as possible.
                   We value your feedback and are always looking for ways to improve our app. If you have any suggestions or comments, we encourage you to share them with us. 
                   Your input helps us make our app even better for all of our users. </p>
              </div>

              <div class="row">

                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>Savska cesta 32, Zagreb</p>
                    </div>

                    <div class="email">
                      <i class="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>info@mushroomscanner.com</p>
                    </div>

                    <div class="phone">
                      <i class="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+385 99 351 3642</p>
                    </div>
                  </div>

              </div>

            </div>
          </section>
          
          <Footer />
     </>
  );
};

export default Contact;
