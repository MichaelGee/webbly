import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Col, InputGroup } from "react-bootstrap";

export default function Banner() {
  return (
    <div>
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
    </div>
  );
}
