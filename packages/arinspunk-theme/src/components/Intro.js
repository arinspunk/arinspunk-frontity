// File: /packages/my-first-theme/src/components/intro.js
import React from "react";
import { connect, styled } from "frontity";
import { Container, Row, Col6 } from "./Shared";
import {
    TokenFontSizeDesktop3,
    TokenFontSizeTablet3,
    TokenFontSizeMobile1,
    TokenFontLineHeightDesktop3,
    TokenFontLineHeightTablet3,
    TokenFontLineHeightMobile1
} from "./tokens/lib/typography/all.js";

const Intro = (props) => {
    return (
        <>
            <IntroContainer>
                <Row>
                    <Col6>
                        <IntroTitle>
                            {props.title}
                        </IntroTitle>
                    </Col6>
                    {props.date &&
                        <Col6>
                            <IntroDate>
                                {props.date}
                            </IntroDate>
                        </Col6>
                    }
                </Row>
                <Row>
                    <Col6>
                        <IntroContent>
                            {props.content}
                        </IntroContent>
                    </Col6>
                </Row>
            </IntroContainer>
        </>
    );
}

const IntroContainer = styled(Container)`
    margin-top: 232px;
    margin-bottom: 110px;
    @media all and (max-width: 991px) {
        margin-top: 202px;
        margin-bottom: 90px;
    }
    @media all and (max-width: 767px) {
        margin-top: 121px;
        margin-bottom: 38px;
    }
`;

const IntroTitle = styled.h1`
    margin-bottom: 48px;
    @media all and (max-width: 991px) {
        margin-bottom: 20px;
    }
`;
const IntroDate = styled.div`
    margin-bottom: 48px;
    font-size: ${TokenFontSizeDesktop3};
    line-height: ${TokenFontLineHeightDesktop3};
    @media all and (max-width: 991px) {
        margin-bottom: 41px;
        font-size: ${TokenFontSizeTablet3};
        line-height: ${TokenFontLineHeightTablet3};
    }
    @media all and (max-width: 767px) {
        margin-bottom: 20px;
        font-size: ${TokenFontSizeMobile1};
        line-height: ${TokenFontLineHeightMobile1};
    }
`;
const IntroContent = styled.div`
    margin-bottom: 0px;
`;

export default connect(Intro);