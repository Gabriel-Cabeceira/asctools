import styled from "styled-components";
import { darkModeNavBarColor, darkModeBackgroundColor } from '../../global-styles/colorScheme'


export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxScriptOptions = styled.div`
    height: 80%;
    width: 40%;
    margin-left: 15em; 
    display: flex;
    align-items: center;
`
export const ScriptOptions = styled.div`
    height: 23%;
    overflow: hidden auto;

    &::-webkit-scrollbar {
        width: 5px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background: ${darkModeNavBarColor};
        border-radius: 5px;
    }
`



export const BoxLineDivision = styled.div`
    width: 2vw;
    height: 85%;
    margin: 1em 0.1em;
`
export const LineDivision = styled.div`
    width: 2px;
    height: 100%;
    margin: 0 50%;
    background: ${darkModeNavBarColor};
`



export const BoxGeneralScripts = styled.div`
    width: 60vw;
    height: 80%;
    margin: 1em;
`
export const BoxInputScripts = styled.div`
    width: 100%;
    height: 35%;
    margin: 1em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
`

