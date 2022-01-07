// File: /packages/arinspunk-theme/src/components/Header.js
import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import NavFooter from "./NavFooter";
import { Container, Row, Col6 } from "./Shared";

const Footer = () => {
    return (
        <>
            <Container>
                <FooterRow>
                    <ColLeft>
                        © arinspunk {new Date().getFullYear()}
                    </ColLeft>
                    <Col6>
                        <NavFooter />
                    </Col6>
                </FooterRow>
            </Container>
        </>
    );
}

export default connect(Footer);

const FooterRow = styled(Row)`
    height: 60px;
    align-items: center;
    justify-content: center;
    margin-top: 175px;
    @media all and (max-width: 991px) {
        height: 50px;
        margin-top: 135px;
    }
    @media all and (max-width: 767px) {
        height: auto;
        margin-top: 96px;
        padding: 13px 0 11px;
    }
`;

const ColLeft = styled(Col6)`
    @media all and (max-width: 767px) {
        order: 1;
        margin-top: 25px;
    } 
`;