import React from 'react';
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="page">
      <h3 className="page-header">HTML made a bit easier.</h3>
      <a 
        className="homepage-email-link"
        href="mailto:kfields31@gmail.com?subject=HTML Helper Praise" 
        target="_blank" 
        rel="noreferrer"
      >
        Email me about this!
      </a>
    </div>
  )
}

export default HomePage