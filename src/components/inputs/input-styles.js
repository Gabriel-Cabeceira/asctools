import styled from "styled-components";
import {darkModeNavBarColor} from '../../global-styles/colorScheme';
import {darkModeBackgroundColor} from '../../global-styles/colorScheme';



export const BoxInput = styled.div`
    width: 15em;
    height: 2em;
    background: ${darkModeNavBarColor};
    border-radius: 5px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    text-indent: 5px;
    font-size: 1em;
    color: #FFFFFF;

    &::placeholder{
        text-indent: 5px;
    }
`