// File: /packages/my-first-theme/src/components/list.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import { Container, Row, Col12 } from "./Shared";
import { TokenColorWhite, TokenColorBlack600 } from "./tokens/lib/color/all.js";
import {
    TokenFontSizeDesktop2,
    TokenFontSizeTablet2,
    TokenFontSizeMobile1,
    TokenFontLineHeightDesktop2,
    TokenFontLineHeightTablet2,
    TokenFontLineHeightMobile1
} from "./tokens/lib/typography/all.js";

const List = ({ state }) => {
    const data = state.source.get(state.router.link);
    return (
        <>
            <Container>
                <Row>
                    <Col12>
                        <Items>
                            {data.items.map((item) => {
                                const post = state.source[item.type][item.id];
                                const formattedDate = dayjs(post.date).format("YYYY");
                                return (
                                    <Item key={item.id}>
                                        <ItemLink link={post.link}>
                                            <ItemYear>{formattedDate} </ItemYear>{post.title.rendered}
                                        </ItemLink>
                                    </Item>
                                )
                            })}
                        </Items>
                    </Col12>
                </Row>
            </Container>
        </>
    );
}

export default connect(List);

const Items = styled.ul`
    list-style: none;
`;

const Item = styled.li`
    margin-bottom: 10px;
    font-size: ${TokenFontSizeDesktop2};
    line-height: ${TokenFontLineHeightDesktop2};
    @media all and (max-width: 991px) {
        font-size: ${TokenFontSizeTablet2};
        line-height: ${TokenFontLineHeightTablet2};
    }
    @media all and (max-width: 767px) {
        font-size: ${TokenFontSizeMobile1};
        line-height: ${TokenFontLineHeightMobile1};
    }
`;

const ItemLink = styled(Link)`
    position: relative;
    display: block;
    text-decoration: none;
    color: ${TokenColorWhite};
    padding-left: 95px;
    @media all and (max-width: 991px) {
        padding-left: 80px;
    }
    @media all and (max-width: 767px) {
        padding-left: 48px;
    }
    &:visited {
    }
    &:hover {
        text-decoration: underline;
    }
`;

const ItemYear = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
`;