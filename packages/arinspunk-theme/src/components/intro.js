// File: /packages/my-first-theme/src/components/intro.js
import React from "react";
import { connect } from "frontity";
import { styled } from "frontity";
import Cta from "./Cta";

const Intro = (props) => {
    return (
        <>
            <IntroWrap>
                <IntroTitle>
                    {props.title}
                </IntroTitle>
                <IntroContent>
                    {props.content}
                </IntroContent>
            </IntroWrap>
        </>
    );
}

const IntroWrap = styled.div`
    margin-bottom: 48px;
`;
const IntroTitle = styled.h1`
    margin-bottom: 16px;
`;
const IntroContent = styled.div`
    margin-bottom: 0px;
`;

export default connect(Intro);