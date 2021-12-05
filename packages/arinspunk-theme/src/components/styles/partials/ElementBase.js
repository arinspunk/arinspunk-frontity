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
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        word-break: break-word;
        word-wrap: break-word;
    }

    html, body {
        background: var(--body-background);
        box-sizing: border-box;
        color: var(--color-text);
        font-family: var(--body-family);
        font-size: clamp(1.05rem, .9rem + 0.25vw, 1.25rem); 
        letter-spacing: -0.015em;
        text-align: left;
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
      margin: 1rem 0;
      font-family: var(--header-family);
      line-height: 1.25;
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
    h4 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.5rem;
    }
    h6 {
      font-size: 1.125rem;
    }

    p {
        line-height: 1.5;
        padding-bottom: 1em;
    }

    em,
    i,
    q,
    dfn {
        font-style: italic;
    }

    em em,
    em i,
    i em,
    i i,
    cite em,
    cite i {
        font-weight: bolder;
    }

    big {
        font-size: 1.2em;
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
  
    a {
        text-decoration: none;
        border-bottom: 2px solid var(--color-link); 
    }
    
    a:hover  {
        color: var(--color-link);
        border-bottom:2.5px solid var(--color-link-darker);
    } 
    
`;

const ElementBase = () => css(styles);

export default ElementBase;