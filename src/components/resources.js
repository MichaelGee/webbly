import React from "react";
import {
  faLink,
  faPencilAlt,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resources() {
  return (
    <div>
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
    </div>
  );
}
