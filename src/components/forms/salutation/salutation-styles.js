import styled from "styled-components";
import { darkModeFontColor, darkModeNavBarColor, darkModeIconsColor } from '../../../global-styles/colorScheme'


export const FormContainer =styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
`

export const Divisor = styled.div`
    margin: 1.5em;
`

export const ScriptContainer = styled.div`
    width: 100%;
    height: 60%;
    margin: 3em auto;
    border-radius: 2px;
    line-height: 1;
`

export const Script = styled.article`
    color: ${darkModeFontColor};

    p {
        margin-bottom: 1.5em;
    }
`

export const Signature = styled.div`
    color: ${darkModeFontColor};
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const SelectLanguage = styled.select`
    background: ${darkModeNavBarColor};
    width: 8em;
    height: 2em;
    margin: 10px 3em;
    border-radius: 5px;
    color: #FFFFFF;
    transition: background-color: 0.3s;
    cursor: pointer;

    &:hover {
        border: 1px solid ${darkModeIconsColor};
    }
`