import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <section className='section3'>
        <h2>Keep up with our updates</h2>
        <p>
          Join our weekly newsletter and get world class tutorials and articles
          on design, coding and marketing.
        </p>
        <div className='email'>
          <form className='form'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Email address...'
              />
              <div class='input-group-prepend'>
                <Button variant='primary' className='email-btn'>
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
