// File: /packages/my-first-theme/src/components/post.js
import React from "react";
import { connect } from "frontity";
import Intro from "./intro";
import PrevNextNav from "./pre-next-nav";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const formattedDate = dayjs(post.date).format("YYYY");
    const Html2React = libraries.html2react.Component;
    return (
        <>
            <Intro title={formattedDate+' '+post.title.rendered} content={<Html2React html={post.content.rendered} />}></Intro>
            <PrevNextNav></PrevNextNav>
        </>
    );
}

export default connect(Post);