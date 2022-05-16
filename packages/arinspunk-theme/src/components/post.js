// File: /packages/my-first-theme/src/components/Post.js
import React from "react";
import { connect, styled } from "frontity";
import dayjs from "dayjs";
import Link from "@frontity/components/link";
import Intro from "./Intro";
import Figure from "./Figure";
import NavPrevNext from "./NavPrevNext";
import { Container, Row, Col12 } from "./Shared";
import {
    TokenColorWhite,
    TokenColorBlack
} from "./tokens/lib/color/all.js";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const formattedDate = dayjs(post.date).format("YYYY");
    const Html2React = libraries.html2react.Component;
    return (
        <>
            {!data.isPage && (
                <>
                    <Intro title={post.title.rendered} content={<Html2React html={post.content.rendered} />} date={formattedDate} />
                    <Figure />
                    <NavPrevNext />
                </>
            )}
            {data.isPage && (
                <>
                    <Intro title={post.title.rendered} content={<Html2React html={post.content.rendered} />} />
                </>
            )}
            <Container>
                <Row>
                    <Col12 centered>
                        <ComeBackLink link={'/'} children={<Html2React html={'Voltar ao índice'} />} />
                    </Col12>
                </Row>
            </Container>
        </>
    );
}

export default connect(Post);

const ComeBackLink = styled(Link)`
    position: relative;
    display: inline-block;
    padding: 10px 25px;
    border: 1px solid ${TokenColorWhite};
    border-radius: 25px;
    text-decoration: none;
    transition: .3s ease;
    &:hover {
        background-color: ${TokenColorWhite};
        color: ${TokenColorBlack};
    }
    /* &::before {
        content: '<-';
        position: absolute;
        top: -7px;
        left: -20px;
        transform: rotate(-45deg);
    } */
    @media all and (max-width: 767px) {
        display: none;
    }
`;