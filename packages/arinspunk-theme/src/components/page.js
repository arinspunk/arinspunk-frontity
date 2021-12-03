// File: /packages/my-first-theme/src/components/page.js
import React from "react";
import { connect } from "frontity";
import Intro from "./intro";

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    return (
        <>
            <Intro title={page.title.rendered} content={<Html2React html={page.content.rendered} />}></Intro>
        </>
    );
}

export default connect(Page);