import styled from "styled-components";
import { darkModeNavBarColor, darkModeBackgroundColor, darkModeFontColor, darkModeIconsColor } from '../../global-styles/colorScheme'


export const Main = styled.div`
    display: flex;
    align-items: center;
`

export const HomeContent = styled.div`
    width: 65vw;
    height: 100vh;
    margin-left: 12em;
    color: ${darkModeFontColor};
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const TitleContainer = styled.div`
    width: 100%;
    height: 15%;
    margin: 4em 0;
    display: flex;
    align-items: center;

    h1 {
        font-size: 5em;
        font-style: italic;
        font-weight: lighter;
        color: ${darkModeNavBarColor};
    }

`

export const BoxesContainer = styled.div`
    width: 100%;
    height: 40%;
    margin-bottom: 4em;
    padding: 1em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ArticleContainer = styled.article`
    width: 30%;
    height: 100%;
    padding: 1em 2em;
    background-color: ${darkModeNavBarColor};


    h2 {
        text-align: center;
        font-weight: lighter;
        font-style: italic;
        margin-bottom: 1em;
        color: ${darkModeFontColor}
    }

    ul {
        list-style: circle;
        padding: 0 1em;
        height: 75%;
        overflow: hidden auto;
        color: ${darkModeFontColor};

        &::-webkit-scrollbar {
            width: 5px; /* Largura da barra de rolagem */
        }
    
        &::-webkit-scrollbar-thumb {
            background: ${darkModeBackgroundColor};
            border-radius: 5px;
        }
    }
`


export const NewsSection = styled.article`
    width: 65%;
    height: 100%;
    padding: 1em 2em;
    background-color: ${darkModeNavBarColor};


    h2 {
        text-align: center;
        font-weight: lighter;
        font-style: italic;
        margin-bottom: 1em;
        color: ${darkModeFontColor}
    }

    ul {
        list-style: circle;
        padding: 0 1em;
        height: 75%;
        overflow: hidden auto;

        &::-webkit-scrollbar {
            width: 5px; /* Largura da barra de rolagem */
        }

        &::-webkit-scrollbar-thumb {
            background: ${darkModeBackgroundColor};
            border-radius: 5px;
        }
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 10%;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${darkModeNavBarColor};
`

export const FooterImage = styled.img`
    width: 3em;
`

export const FooterParagraph = styled.p`
    font-size: 0.5em;
    margin-top: 5px;
    color: ${darkModeBackgroundColor};
`