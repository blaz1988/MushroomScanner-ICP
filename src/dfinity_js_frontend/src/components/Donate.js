import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Donate = () => {
   return (
     <>
          <Navigation />
          <section id="contact" class="contact">
            <div class="contact_cont">

              <div class="section-title">
                <h2>Donate us</h2>
                <p>If you like this project, please consider making a donation to support our work.</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/muschroom-feec7.appspot.com/o/1c6dd47d-498b-484d-8f99-06c343134afd.jpg?alt=media&token=4af9f80e-de7b-4385-8f5a-cb306ad10bad" className="donate_img" />
              </div>
            </div>
          </section>
          <Footer />
     </>
  );
};

export default Donate;
