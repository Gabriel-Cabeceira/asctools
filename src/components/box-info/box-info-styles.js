import styled from "styled-components";
import { darkModeNavBarColor, darkModeBackgroundColor } from '../../global-styles/colorScheme'


export const ArticleContainer = styled.article`
    width: 30%;
    height: 100%;
    background-color: ${darkModeNavBarColor};

    h1 {
        text-align: center;
        font-weight: lighter;
        font-style: italic;
        margin: 8px 0;
        color: ${darkModeBackgroundColor}
    }
`

export const  InfoContent = styled.section`
    margin: 8px 0;
    padding: 1em;

`