// File: /packages/arinspunk-theme/src/components/Header.js
import React from "react";
import { connect, styled } from "frontity";
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
    margin-top: 205px;
    @media all and (max-width: 991px) {
        height: auto;
        padding: 13px 0 11px;
        margin-top: 135px;
    }
    @media all and (max-width: 767px) {
        margin-top: 96px;
    }
`;

const ColLeft = styled(Col6)`
    @media all and (max-width: 991px) {
        order: 1;
        margin-top: 25px;
    } 
`;