// File: /packages/arinspunk-theme/src/components/Header.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Nav from "./Nav";
import { Container, Row, Col6 } from "./Shared";
import { TokenColorBlack, TokenColorBlack700 } from "./tokens/lib/color/all.js";

const Header = ({ state }) => {
    const data = state.source.get(state.router.link);
    const currentUrl = data.link;
    return (
        <>
            <HeaderContainer>
                <HeaderRow>
                    <Col6>
                        <HeaderLogo>
                            <HeaderLogoIcon>🌱</HeaderLogoIcon>
                            {currentUrl !== "/" ? <HeaderLogoLink link="/">arinspunk ⚰️</HeaderLogoLink> : 'arinspunk ⚰️'}
                        </HeaderLogo> 
                    </Col6>
                    <Col6>
                        <Nav />
                    </Col6>
                </HeaderRow>
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled(Container)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${TokenColorBlack};
    z-index: 100;
`;

const HeaderRow = styled(Row)`
    height: 60px;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 991px) {
        height: 40px;
    }
    @media all and (max-width: 767px) {
        height: 30px;
    }
`;

const HeaderLogo = styled.span`
    display: inline-block;
    transform: rotate(178.3deg);
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: ${TokenColorBlack700};
`;

const HeaderLogoIcon = styled.span`
    position: absolute;
    top: 14px;
    right: 12px;
    transform: rotate(180deg);
`;

const HeaderLogoLink = styled(Link)`
    text-decoration-style: dotted;
    text-decoration-color: ${TokenColorBlack700};
`;

export default connect(Header);