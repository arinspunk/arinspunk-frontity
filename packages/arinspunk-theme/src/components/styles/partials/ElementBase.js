// src/components/styles/partials/ElementBase.js
import { css } from "frontity";
import * as font from "../../tokens/lib/typography/all.js";
import * as size from "../../tokens/lib/spacing/all.js"
import { TokenColorWhite, TokenColorBlack } from "../../tokens/lib/color/all.js"

const styles = css`

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0s !important;
            transition-duration: 0s !important;
        }
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        overflow-x:hidden;
        font-size: 62.5%; /* Para usar rem de forma "amable": 10px = 1rem */
        -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        /* scroll-behavior: smooth; */
        @media screen and (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;
        }
    }

    body {
        height: 100%;
        font-family: ${font.TokenFontFamilyMain}, -apple-system, "Helvetica Neue", sans-serif;
        font-size: ${font.TokenFontSizeDesktop1};
        font-weight: ${font.TokenFontWeightRegular};
        font-variant-ligatures: common-ligatures discretionary-ligatures;
        line-height: ${font.TokenFontLineHeightDesktop1};
        font-variant-ligatures: normal;
	    text-rendering: optimizeLegibility;
        color: ${TokenColorWhite};
        background-color: ${TokenColorBlack};
        margin: 0;
        padding: 0;
        @media all and (max-width: 1279px) {
            font-size: ${font.TokenFontSizeTablet1};
            line-height: ${font.TokenFontLineHeightTablet1};
        }
        @media all and (max-width: 767px) {
            font-size: ${font.TokenFontSizeMobile1};
            line-height: ${font.TokenFontLineHeightMobile1};
        }
    }

    main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: ${font.TokenFontWeightRegular};
    }

    h1 {
        font-size: ${font.TokenFontSizeDesktop3};
        line-height: ${font.TokenFontLineHeightDesktop3};
        @media all and (max-width: 1279px) {
            font-size: ${font.TokenFontSizeTablet3};
            line-height: ${font.TokenFontLineHeightTablet3};
        }
        @media all and (max-width: 767px) {
            font-size: ${font.TokenFontSizeMobile3};
            line-height: ${font.TokenFontLineHeightMobile3};
        }
    }

    h2 {
        font-size: ${font.TokenFontSizeDesktop2};
        line-height: ${font.TokenFontLineHeightDesktop2};
        @media all and (max-width: 1279px) {
            font-size: ${font.TokenFontSizeTablet2};
            line-height: ${font.TokenFontLineHeightTablet2};
        }
        @media all and (max-width: 767px) {
            font-size: ${font.TokenFontSizeMobile2};
            line-height: ${font.TokenFontLineHeightMobile2};
        }
    }

    h3, h4, h5, h6 {
        font-size: ${font.TokenFontSizeDesktop1};
        line-height: ${font.TokenFontLineHeightDesktop1};
        @media all and (max-width: 1279px) {
            font-size: ${font.TokenFontSizeTablet1};
            line-height: ${font.TokenFontLineHeightTablet1};
        }
        @media all and (max-width: 767px) {
            font-size: ${font.TokenFontSizeMobile1};
            line-height: ${font.TokenFontLineHeightMobile1};
        }
    }

    p, ul, ol, blockquote {
        margin-bottom: ${size.TokenSize3};
        @media all and (max-width: 1279px) {
            margin-bottom: 25px;
        }
        @media all and (max-width: 767px) {
            margin-bottom: ${size.TokenSize2};
        }
    }

    a {
        color: ${TokenColorWhite};
        &:hover {
            text-decoration: none;
        }
    }

    small, cite {
        font-size: ${font.TokenFontSizeDesktop0};
        line-height: ${font.TokenFontLineHeightDesktop0};
        @media all and (max-width: 1279px) {
            font-size: ${font.TokenFontSizeTablet0};
            line-height: ${font.TokenFontLineHeightTablet0};
        }
        @media all and (max-width: 767px) {
            font-size: ${font.TokenFontSizeMobile0};
            line-height: ${font.TokenFontLineHeightMobile0};
        }
    }

    blockquote {
        position: relative;
        padding-left: ${size.TokenSize3}
    }

    blockquote p::before {
        position: absolute;
        left: 19px;
        content: "«";
    }

    cite {
        display: block;
        margin-bottom: 60px;
        @media all and (max-width: 1279px) {
            margin-bottom: 50px;
        }
        @media all and (max-width: 767px) {
            margin-bottom: 40px;
        }
    }

    em, i, q, dfn {
        font-style: italic;
    }

    b, strong {
        font-weight: 700;
    }

    ins {
        text-decoration: underline;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -0.5em;
    }

    sub {
        bottom: -0.25em;
    }

    abbr,
    acronym {
        cursor: help;
    }

    address {
        line-height: 1.5;
        margin: 0 0 2rem 0;
    }

    hr {
        border-style: solid;
        border-width: 0.1rem 0 0 0;
        border-color: #DCD7CA;
        margin: 4rem 0;
    }
    
`;

const ElementBase = () => css(styles);

export default ElementBase;