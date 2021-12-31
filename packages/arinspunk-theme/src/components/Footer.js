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
                    <Col6>
                    © arinspunk 2021
                    </Col6>
                    <Col6>
                        <NavFooter />
                    </Col6>
                </FooterRow>
            </Container>
        </>
    );
}

const FooterRow = styled(Row)`
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 175px;
`;

const Menu = styled.div`
`;

export default connect(Footer);