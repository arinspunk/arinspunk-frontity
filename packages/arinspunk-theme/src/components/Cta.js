// File: /packages/arinspunk-theme/src/components/Cta.js
import React from "react";
import { connect, css } from "frontity";
import Link from "@frontity/components/link";
import { TokenColorWhite, TokenColorBlack } from "./tokens/lib/color/all.js";

const cta = css`
    padding: 15px 40px;
    border: 1px solid ${TokenColorWhite};
    border-radius: 40px;
    text-decoration: none;
    color: ${TokenColorBlack};
    background-color: ${TokenColorWhite};
    &:hover {
        background-color: ${TokenColorBlack};
        color: ${TokenColorWhite};
    }
`;

const Cta = ({ link, children }) => (
    <Link link={link} css={cta}>
        {children}
    </Link>
);

export default connect(Cta);