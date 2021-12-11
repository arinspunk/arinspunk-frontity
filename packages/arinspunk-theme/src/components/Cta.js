// File: /packages/my-first-theme/src/components/intro.js
import React from "react";
import { connect, css } from "frontity";

const cta = css`
    padding: 15px 40px;
    border: 1px solid #fff;
    border-radius: 40px;
    text-decoration: none;
    color: #fff;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

const Cta = ({ href, children }) => (
    <a href={href} css={cta}>
        {children}
    </a>
);

export default connect(Cta);