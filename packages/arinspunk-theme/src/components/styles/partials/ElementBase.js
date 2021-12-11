// src/components/styles/partials/ElementBase.js
import { css } from "frontity";

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
        scroll-behavior: smooth;
    }
    @media screen and (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }
    }
    body {
        height: 100%;
        font-family: var(--font-family-primary);
        font-size: 2rem;
        font-weight: normal;
        font-variant-ligatures: common-ligatures discretionary-ligatures;
        line-height: 1.5;
        color: var(--color-basic-100);
        background-color: var(--color-basic-900);
        margin: 0;
        padding: 0;
        @media all and (max-width: 767px) {
            font-size: 1.6rem; 
        }
    }
    main {
        display: block;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2.75rem;
    }
    h4, h5, h6 {
      font-size: 2rem;
    }

    p {
        line-height: 1.5;
    }

    em,
    i,
    q,
    dfn {
        font-style: italic;
    }

    small {
        font-size: 0.75em;
    }

    b,
    strong {
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