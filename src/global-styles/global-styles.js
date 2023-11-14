import { createGlobalStyle } from "styled-components";
import { darkModeBackgroundColor, lightModeBackgroundColor } from './colorScheme';




const GlobalStyle = createGlobalStyle`

    :root {

        --bg: ${darkModeBackgroundColor};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: var(--bg);
        font-size: 16px;
        font-family: Arial, sans-serif;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input, select, textarea {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }
`



export { GlobalStyle }