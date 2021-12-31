// File: /packages/arinspunk-theme/src/components/Error.js
import React from "react";
import { connect } from "frontity";
import Intro from "./Intro";

const Error = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const text = <Html2React html={"O slug <em>"+state.router.link+"</em> nom existe…"} />;
  return (
    <>
      <Intro title="Error 404" content={text} date="😵" />  
    </>
  )
}

export default connect(Error);