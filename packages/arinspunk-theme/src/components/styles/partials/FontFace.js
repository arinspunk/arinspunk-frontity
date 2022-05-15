// src/components/styles/partials/FontFace.js
import { css } from "frontity";
import IsaacRegularWoff from "../../fonts/Isaac.woff";
import IsaacRegularItalicWoff from "../../fonts/Isaac-RegularItalic.woff";
import IsaacRegularWoff2 from "../../fonts/Isaac.woff2";
import IsaacRegularItalicWoff2 from "../../fonts/Isaac-RegularItalic.woff2";

const styles = css`
    @font-face {
        font-family: "Isaac";
        src: url(${IsaacRegularWoff}) format('woff2'),
             url(${IsaacRegularWoff2}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "Isaac";
        src: url(${IsaacRegularItalicWoff}) format('woff'),
             url(${IsaacRegularItalicWoff2}) format('woff2');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
`;

const FontFace = () => css(styles);

export default FontFace;