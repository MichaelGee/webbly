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
              <Card.Title className='card_title'>Resources</Card.Title>
              <Card.Text className='card_text'>
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
              <Card.Title className='card_title'>Forums</Card.Title>
              <Card.Text className='card_text'>
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
              <Card.Title className='card_title'>Contact Us</Card.Title>
              <Card.Text className='card_text'>
                Contact our support team. We'll do everything to help you.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <Card className='notify'>
          <Card.Body className='notify_main'>
            <Card.Text>
              <Button
                variant='primary'
                className='notify_button'
                aria-label='Hambuger menu'
              >
                NEW
              </Button>
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
