import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
     <footer className="site-footer">
               <hr></hr>
          <div className="row">
               <div className="col-md-8 col-sm-6 col-xs-12">
               <p className="copyright-text">© {currentYear} Rubycode. All rights reserved. 
               </p>
               </div>
          </div>
     </footer>
    </div>
  );
}
