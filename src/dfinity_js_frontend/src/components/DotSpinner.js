import React from "react";

export default function DotSpinner() {
  return (
    <div className="centered-spinner-container">
      <div className="white-background">
          <div className="dot-spinner">
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
               <div className="dot-spinner__dot"></div>
          </div>
      </div>
    </div>
  );
}
