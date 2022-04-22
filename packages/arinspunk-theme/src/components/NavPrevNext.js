// File: /packages/my-first-theme/src/components/pre-next-nav.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
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
                    <ColNav>
                        {post.previous && (
                            <NavLink link={post.previous.slug} right="true">
                                <Label>
                                    Anterior
                                </Label>
                                <Title>
                                    <Arrow>&lt;-</Arrow>
                                    {post.previous.title}    
                                </Title> 
                            </NavLink>
                        )}
                    </ColNav>
                    <ColNav>
                        {post.next && (
                            <NavLink link={post.next.slug}>
                                <Label>
                                    Seguinte
                                </Label>
                                <Title>
                                    {post.next.title}
                                    <Arrow>-&gt;</Arrow>
                                </Title> 
                            </NavLink>
                        )}
                    </ColNav>
                </Row>
            </NavContainer>
        </>
    );
}

const NavContainer = styled(Container)`
    margin-top: 193px;
    @media all and (max-width: 767px) {
        margin-top: 63px;
    }
`;

const ColNav = styled(Col6)`
    @media all and (max-width: 767px) {
        width: calc(50% - 15px);
        margin-right: 15px;
    }
`;

const NavLink = styled(Link)`
    position: relative;
    display: block;
    margin-bottom: 112px;
    text-decoration: none;
    text-align: ${ props =>
        props.right ? 'right' : 'left'
    };
    padding: ${ props => props.right ? '0 calc(11.76% + 40px) 0 calc(23.53% + 80px)' : '0 calc(23.53% + 80px) 0 calc(11.76% + 40px)' };
    font-size: ${TokenFontSizeDesktop2};
    line-height: ${TokenFontLineHeightDesktop2};
    @media all and (max-width: 1280px) {
        padding: ${ props => props.right ? '0 calc(11.76% + 40px) 0 60px' : '0 60px 0 calc(11.76% + 40px)' };
    }
    @media all and (max-width: 991px) {
        padding: ${ props => props.right ? '0 calc(11.76% + 40px) 0 45px' : '0 45px 0 calc(11.76% + 40px)' };
        font-size: ${TokenFontSizeTablet2};
        line-height: ${TokenFontLineHeightTablet2};
    }
    @media all and (max-width: 767px) {
        padding: 0;
        margin-bottom: 52px;
        font-size: ${TokenFontSizeMobile2};
        line-height: ${TokenFontLineHeightMobile2};
    }
    & span > span {
        ${ props => props.right ? 'left: calc(-11.76% - 40px);' : 'right: calc(-11.76% - 40px);' };
        @media all and (max-width: 1280px) {
            ${ props => props.right ? 'left: -60px;' : 'right: -60px;' };
        }
        @media all and (max-width: 991px) {
            ${ props => props.right ? 'left: -45px;' : 'right: -45px;' };
        }
    }
    &:hover span > span {
        ${ props => props.right ? 'left: calc(-11.76% - 50px);' : 'right: calc(-11.76% - 50px);' };
        @media all and (max-width: 1280px) {
            ${ props => props.right ? 'left: -80px' : 'right: -80px;' };
        }
        @media all and (max-width: 991px) {
            ${ props => props.right ? 'left: -60px' : 'right: -60px;' };
        }
    }
    &:hover span + span {
        text-decoration: underline;
    }
`;

const Label = styled.span`
    display: block;
    margin-bottom: 6px;
    font-size: ${TokenFontSizeDesktop0};
    line-height: ${TokenFontLineHeightDesktop0};
    @media all and (max-width: 991px) {
        margin-bottom: 5px;
        font-size: ${TokenFontSizeTablet0};
        line-height: ${TokenFontLineHeightTablet0};
    }
    @media all and (max-width: 767px) {
        margin-bottom: 7px;
        font-size: ${TokenFontSizeMobile0};
        line-height: ${TokenFontLineHeightMobile0};
    }
`;

const Title = styled.span`
    position: relative;
    display: block;
`;

const Arrow = styled.span`
    position: absolute;
    top: -2px;
    font-size: 4.8rem;
    transition: ease-out .1s;
    @media all and (max-width: 991px) {
        font-size: 3.6rem;
    }
    @media all and (max-width: 767px) {
        display: none;
    }
`;

export default connect(NavPrevNext);