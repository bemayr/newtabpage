// import "./index.css";

import "./common.css";

import Background from "../components/Background";
import Header from "../components/Header";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

const images = [
  {
    filename: "0e89624d11f54314a0e28ee09786ac4d.jpg",
    location: "Gdańsk, Poland"
  },
  {
    filename: "7f10ab2daaf147c698525882db1dd09d.jpg",
    location: "Янтарный, Kaliningrad"
  },
  {
    filename: "05676e094c6d4b65b571ddfadda29ff0.jpg",
    location: "Orajõe, Estonia"
  },
  {
    filename: "743f40b2a12d45b18c01f1e5792d023e.jpg",
    location: "Baltic Sea, Finland"
  },
  {
    filename: "ea1ddd9bfa97413188353783e6e55f1f.jpg",
    location: "Knutnäsvägen, Åland"
  },
  {
    filename: "171e018a0fa44ad888c02fb6324a49d2.jpg",
    location: "Wartberg ob der Aist, Austria"
  },
  {
    filename: "ca59b0aa67834a9fb44552eacc879f19.jpg",
    location: "Wartberg ob der Aist, Austria"
  },
  {
    filename: "c79992d7ce4148ceb288bb83632f9138.jpg",
    location: "Wolfsegg, Austria"
  },
  {
    filename: "fa396395ddbb494b8f0448601c948599.jpg",
    location: "Wolfsegg, Austria"
  },
  {
    filename: "0cc265f656c342e9b2631b9c5e3b5e86.jpg",
    location: "Wartberg ob der Aist, Austria"
  },
  {
    filename: "179f7801a531484fa1d55b360d136fb4.jpg",
    location: "Wartberg ob der Aist, Austria"
  },
  {
    filename: "528ed337ec3c4bf8af9592758a9e8ef0.jpg",
    location: "Wartberg ob der Aist, Austria"
  },
  {
    filename: "a72c4034dfee4b38bb516892b91f88f0.jpg",
    location: "Malmö, Sweden"
  }
];

const chooseRandomBackground = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Background background={chooseRandomBackground()} />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
