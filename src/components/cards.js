import React from "react";
import { Card, Button } from "react-bootstrap";
import {
  faDownload,
  faCommentAlt,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
  return (
    <div>
      <div className='card_container'>
        <div className='first_card'>
          <Card>
            <Card.Body className='card_body'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faDownload} />
              </div>
              <Card.Title>Resources</Card.Title>
              <Card.Text>
                Check out free resourses & design tokens for your next projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='second_card'>
          <Card>
            <Card.Body className='card_body'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faCommentAlt} />
              </div>
              <Card.Title>Forums</Card.Title>
              <Card.Text>
                Join a community of thousands of customers just like you.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='third_card'>
          <Card>
            <Card.Body className='card_body'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faHeadset} />
              </div>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Contact our support team. We'll do everything to help you.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='notify'>
        <Card className='notifyMain'>
          <Card.Body>
            <Card.Text>
              <Button variant='primary'>NEW</Button>
              We have updated our documentations, we added a new tutorials
              section. Check it out!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
