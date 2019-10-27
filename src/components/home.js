import React from "react";
import Navi from "./navbar";
import Cards from "./cards";
import Contact from "./contact";
import {
  faSearch,
  faLink,
  faPencilAlt,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Col, InputGroup } from "react-bootstrap";

const Homepage = () => {
  return (
    <div>
      <Navi />
      <Col>
        <section className='section1'>
          <div className='container'>
            {/* Section 1 text */}
            <h2>Knowledge Base</h2>
            <h4>
              All the resources you need to get the most out of <br /> our
              product, quality and effectively!
            </h4>
            {/* Search Bar */}
            <div className='search-bar'>
              <Form>
                <Form.Group>
                  <InputGroup>
                    <Form.Control
                      type='text'
                      placeholder='Search..'
                      className='search'
                    />
                    <InputGroup.Prepend>
                      <InputGroup.Text className='searchButton'>
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>
          </div>
        </section>
      </Col>
      <Cards />
      <section className='section2'>
        <article className='article_column1'>
          <h4 className='article_title1'>Popular Articles</h4>
          <FontAwesomeIcon className='section-icon' icon={faLink} />
          <p>Creating a new project</p>
          <FontAwesomeIcon className='section-icon' icon={faLink} />
          <p>Export assets & images as a zip file</p>
          <FontAwesomeIcon className='section-icon' icon={faLink} />
          <p>Deploy a project to the cloud with AWS</p>
          <FontAwesomeIcon className='section-icon' icon={faLink} />
          <p>Create a team and manage access tokens</p>
          <FontAwesomeIcon className='section-icon' icon={faLink} />
          <p>Upgrade your account</p>
        </article>
        <article className='article_column2'>
          <h4 className='article_title2'>Latest Tutorials</h4>
          <FontAwesomeIcon className='section-icon' icon={faPencilAlt} />
          <p>Designing and building a web app from scratch</p>
          <FontAwesomeIcon className='section-icon' icon={faPencilAlt} />
          <p>How to use sketch symbols</p>
          <FontAwesomeIcon className='section-icon' icon={faPencilAlt} />
          <p>Node authentication with passport</p>
          <FontAwesomeIcon className='section-icon' icon={faPencilAlt} />
          <p>React Native todo app</p>
          <FontAwesomeIcon className='section-icon' icon={faPencilAlt} />
          <p>How to set up continous integration server</p>
        </article>
        <article className='article_column3'>
          <h4 className='article_title3'>From our Forums</h4>
          <FontAwesomeIcon className='section-icon' icon={faCommentAlt} />
          <p>How to set up custom DNS: James Gordon</p>
          <FontAwesomeIcon className='section-icon' icon={faCommentAlt} />
          <p>Check out my latest creation: Kelvin Dart</p>
          <FontAwesomeIcon className='section-icon' icon={faCommentAlt} />
          <p>Is Webble down for you guys?: Neville Griff</p>
          <FontAwesomeIcon className='section-icon' icon={faCommentAlt} />
          <p>Welcome to the new website!: Daya Chitan</p>
          <FontAwesomeIcon className='section-icon' icon={faCommentAlt} />
          <p>How can i add icons to m build: Diana Larry</p>
        </article>
      </section>
      <Contact />
    </div>
  );
};

export default Homepage;
