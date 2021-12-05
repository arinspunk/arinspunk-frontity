// src/components/styles/partials/FontFace.js
import { css } from "frontity";
import IsaacSans from "../../fonts/IsaacRegular.woff";

const styles = css`
    @font-face {
        font-family: "IsaacSans";
        src: url(${IsaacSans}) format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

const FontFace = () => css(styles);

export default FontFace;