import React, { useState, useEffect } from "react";
import "./page.css";

export default function Navigation() {


  return (
     <header>
          <div className="intro-text">
               <div className="intro-heading">Mushroom Scanner</div>
               <br />
               <a href="?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai#lens" class="page-scroll btn btn-xl">Upload image</a>
               <br />
               <br />
          </div>
     </header>
  );
}
