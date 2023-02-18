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
      <a href="mailto:kfields31@gmail.com?subject=you%20suck%20and%20so%20does%20this%20site">kfields31@gmail.com</a>
    </div>
  )
}

export default HomePage