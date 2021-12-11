// src/components/styles/partials/Settings.js
import { css } from "frontity";

const styles = css`
    :root {
        --font-family-system: -apple-system, "Helvetica Neue", sans-serif;
        --font-family-primary: 'IsaacSans', var(--font-family-system);
        
        --color-primary-600: #0000FF;
        --color-primary-500: #3232FF;
        --color-primary-400: #6464FF;
        --color-primary-300: #9696FF;
        --color-primary-200: #C8C8FF;
        --color-primary-100: #F0F0FF;

        --color-basic-900: #000;
        --color-basic-100: #fff;
        
        --wide-container: clamp(16rem, 90vw, 80rem);
        --normal-container: clamp(16rem, 90vw, 58rem);
    }
`;

const Settings = () => css(styles);

export default Settings;