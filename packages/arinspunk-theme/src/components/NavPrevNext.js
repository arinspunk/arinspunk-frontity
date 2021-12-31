// File: /packages/my-first-theme/src/components/pre-next-nav.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Cta from "./Cta";
import { Container, Row, Col6, Col12 } from "./Shared";
import {
    TokenFontSizeDesktop2,
    TokenFontSizeTablet2,
    TokenFontSizeMobile2,
    TokenFontSizeDesktop0,
    TokenFontSizeTablet0,
    TokenFontSizeMobile0,
    TokenFontLineHeightDesktop2,
    TokenFontLineHeightTablet2,
    TokenFontLineHeightMobile2,
    TokenFontLineHeightDesktop0,
    TokenFontLineHeightTablet0,
    TokenFontLineHeightMobile0,
} from "./tokens/lib/typography/all.js";

const NavPrevNext = ({state}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    return (
        <>
            <NavContainer>
                <Row>
                    <Col6>
                        {post.previous && (
                            <NavLink link={post.previous.slug} right="true">
                                <Label>
                                    Anterior
                                </Label>
                                <Title>
                                    {post.previous.title}
                                </Title> 
                            </NavLink>
                        )}
                    </Col6>
                    <Col6>
                        {post.next && (
                            <NavLink link={post.next.slug}>
                                <Label>
                                    Seguinte
                                </Label>
                                <Title>
                                    {post.next.title}
                                </Title> 
                            </NavLink>
                        )}
                    </Col6>
                    <Col12 centered>
                        <Cta link={'/'} children={'voltar ao índice'} />
                    </Col12>
                </Row>
            </NavContainer>
        </>
    );
}

const NavContainer = styled(Container)`
    margin-top: 193px;
`;

const NavLink = styled(Link)`
    display: block;
    margin-bottom: 62px;
    text-decoration: none;
    text-align: ${ props =>
        props.right ? 'right' : 'left'
    };
    padding: ${ props =>
        props.right ? '0 17.65% 0 35.3%' : '0 35.3% 0 17.65%'
    };
`;

const Label = styled.span`
    display: block;
    margin-bottom: 6px;
    font-size: ${TokenFontSizeDesktop0};
    line-height: ${TokenFontLineHeightDesktop0};
    @media all and (max-width: 991px) {
        font-size: ${TokenFontSizeTablet0};
        line-height: ${TokenFontLineHeightTablet0};
    }
    @media all and (max-width: 767px) {
        font-size: ${TokenFontSizeMobile0};
        line-height: ${TokenFontLineHeightMobile0};
    }
`;

const Title = styled.span`
    display: block;
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

export default connect(NavPrevNext);