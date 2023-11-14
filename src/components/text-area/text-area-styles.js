import styled from "styled-components";
import {darkModeNavBarColor, darkModeBackgroundColor} from '../../global-styles/colorScheme';




export const BoxInput = styled.div`
    width: 15em;
    height: 2em;
    background: ${darkModeNavBarColor};

`

export const TextArea = styled.textarea`
    width: 100%;
    height: 8em;
    text-indent: 5px;
    font-size: 1em;
    border-radius: 5px;
    background: ${darkModeNavBarColor};
    color: #757575;

    resize: vertical;

    &::placeholder{
        text-indent: 5px;
    }
`