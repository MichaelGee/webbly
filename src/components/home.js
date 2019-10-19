import React from "react";
import Navi from "./navbar";
import Cards from "./cards";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
        </section>
      </Col>
      <Cards />
      <section className='section2'>
        <article className='article_column1'>
          <h4 className='article_title1'>Popular Articles</h4>
          <p>Creating a new project</p>
          <p>Export assets & images as a zip file</p>
          <p>Deploy a project to the cloud with AWS</p>
          <p>Create a team and manage access tokens</p>
          <p>Upgrade your account</p>
        </article>
        <article className='article_column2'>
          <h4 className='article_title2'>Latest Tutorials</h4>
          <p>Designing and building a web app from scratch</p>
          <p>How to use sketch symbols</p>
          <p>Node authentication with passport</p>
          <p>React Native todo app</p>
          <p>How to set up continous integration server</p>
        </article>
        <article className='article_column3'>
          <h4 className='article_title3'>From our Forums</h4>
          <p>How to set up custom DNS: James Gordon</p>
          <p>Check out my latest creation: Kelvin Dart</p>
          <p>Is Webble down for you guys?: Neville Griff</p>
          <p>Welcome to the new website!: Daya Chitan</p>
          <p>How can i add icons to m build: Diana Larry</p>
        </article>
      </section>
    </div>
  );
};

export default Homepage;
