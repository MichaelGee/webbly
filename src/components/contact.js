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
          <Form>
            <Form.Group>
              <InputGroup>
                <Form.Control
                  type='text'
                  placeholder='Search..'
                  className='search'
                />
              </InputGroup>
            </Form.Group>
          </Form>
          <Button variant='primary' className='email-btn'>
            Sign In
          </Button>
        </div>
      </section>
    </div>
  );
}
