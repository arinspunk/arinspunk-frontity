// File: /packages/my-first-theme/src/components/post.js
import React from "react";
import { connect } from "frontity";
import dayjs from "dayjs";
import Intro from "./Intro";
import PrevNextNav from "./PrevNextNav";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const formattedDate = dayjs(post.date).format("YYYY");
    const Html2React = libraries.html2react.Component;
    return (
        <>
            <Intro title={formattedDate+' '+post.title.rendered} content={<Html2React html={post.content.rendered} />} />
            <PrevNextNav />
        </>
    );
}

export default connect(Post);