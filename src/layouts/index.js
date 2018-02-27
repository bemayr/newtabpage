// import "./index.css";

import "./common.css";

import Background from "../components/Background";
import Header from "../components/Header";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

const selectRandomBackground = images =>
  images[Math.floor(Math.random() * images.length)];

const extractBackgroundImageData = data =>
  data.map(o => ({
    path: o.publicURL,
    location: /\(([^)]+)\)/
      .exec(o.name)[0]
      .replace("(", "")
      .replace(")", "")
  }));

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Background
      background={selectRandomBackground(
        extractBackgroundImageData(data.allFile.edges.map(e => e.node))
      )}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query BackgroundImagesQuery {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;
