import styled from "styled-components";
import { darkModeNavBarColor, darkModeBackgroundColor } from '../../global-styles/colorScheme'


export const Main = styled.div`
    display: flex;
    align-items: center;
`

export const HomeContent = styled.div`
    width: 80vw;
    height: 90vh;
    margin-left: 5em;
    color: #FFFFFF;
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

export const FooterContainer = styled.div`
    width: 100%;
    height: 10%;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${darkModeNavBarColor};
`

export const FooterImage = styled.img`
    width: 3em;
`