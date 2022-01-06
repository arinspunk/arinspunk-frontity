// File: /packages/my-first-theme/src/components/Post.js
import React from "react";
import { connect } from "frontity";
import dayjs from "dayjs";
import Intro from "./Intro";
import Figure from "./Figure";
import Link from "@frontity/components/link";
import NavPrevNext from "./NavPrevNext";
import { Container, Row, Col12 } from "./Shared";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const formattedDate = dayjs(post.date).format("YYYY");
    const Html2React = libraries.html2react.Component;
    const regex = /(<([^>]+)>)/gi;
    return (
        <>
            <Intro title={post.title.rendered} content={<Html2React html={post.content.rendered} />} date={formattedDate} />
            {!data.isPage && (
                <>
                    <Figure />
                    <NavPrevNext />
                </>
            )}
            <Container>
                <Row>
                    <Col12 centered>
                        <Link link={'/'} children={<Html2React html={'&#8617; Voltar ao índice'} />} />
                    </Col12>
                </Row>
            </Container>
        </>
    );
}

export default connect(Post);