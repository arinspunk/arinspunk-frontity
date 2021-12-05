// src/components/styles/partials/Settings.js
import { css } from "frontity";

const styles = css`
    :root {
        --system-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        --code-family: Menlo, 'Roboto Mono', Courier New, monospace;

        --header-family: 'IsaacSans', var(--system-family);
        --body-family: 'IsaacSans', var(--system-family);
        --meta-family: 'IsaacSans', var(--system-family);
        --body-background: #000;
        --header-color: #404040;
        --background-footer: #e6e6e6;
        --button-background: #5183f5;
    
        --color-brand: #3291f1;
        --color-brand-light: #b1eaf5;
        --color-text: #fff;
        --color-text-medium: rgba(96,101,108,0);
        --color-text-light: rgb(184, 185, 188);
        --color-border: #e1e5e8;

        --color-link: #414141;
        --color-link-darker: #364fc7;
        
        --wide-container: clamp(16rem, 90vw, 80rem);
        --normal-container: clamp(16rem, 90vw, 58rem);
    }
`;

const Settings = () => css(styles);

export default Settings;