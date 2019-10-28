import React from "react";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='brand'>
        Webbly<span>.</span>
      </div>
      <div className='first-col'>
        <h5>Company</h5>
        <p>
          <a href='#'>About us</a>
        </p>
        <p>
          <a href='#'>Blog</a>
        </p>
        <p>
          <a href='#'>Contact</a>
        </p>
        <p>
          <a href='#'>Work for us</a>
        </p>
      </div>
      <div className='second-col'>
        <h5>Product</h5>
        <p>
          <a href='#'>Trial</a>
        </p>
        <p>
          <a href='#'>Pricing</a>
        </p>
        <p>
          <a href='#'>Terms</a>
        </p>
      </div>
      <div className='third-col'>
        <h5>Resources</h5>
        <p>
          <a href='#'>User guides</a>
        </p>
        <p>
          <a href='#'>Support</a>
        </p>
        <p>
          <a href='#'>Documentation</a>
        </p>
      </div>
    </div>
  );
}
