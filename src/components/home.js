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
      <Col md={{ span: 6, offset: 3 }}>
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
    </div>
  );
};

export default Homepage;
