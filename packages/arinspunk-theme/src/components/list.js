// File: /packages/my-first-theme/src/components/list.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { Container, Row, Col12 } from "./Shared";
import { TokenColorWhite } from "./tokens/lib/color/all.js";
import {
    TokenFontSizeDesktop2,
    TokenFontSizeTablet2,
    TokenFontSizeMobile2,
    TokenFontLineHeightDesktop2,
    TokenFontLineHeightTablet2,
    TokenFontLineHeightMobile2
} from "./tokens/lib/typography/all.js";
import dayjs from "dayjs";

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
        font-size: ${TokenFontSizeMobile2};
        line-height: ${TokenFontLineHeightMobile2};
    }
`;

const ItemLink = styled(Link)`
    text-decoration: none;
    color: ${TokenColorWhite};
    &:hover {
        text-decoration: underline;
    }
`;

const ItemYear = styled.span`
    width: 95px;
    display: inline-block;
    opacity: .4;
`;

export default connect(List);