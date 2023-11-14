import styled from "styled-components";
import {darkModeNavBarColor} from '../../global-styles/colorScheme';




export const BoxSelect = styled.div`
    width: 15em;
    height: 2em;
    background: ${darkModeNavBarColor};
    border-radius: 5px;
`

export const Select = styled.select`
    width: 100%;
    height: 100%;
    text-indent: 5px;
    font-size: 1em;
    color: #757575;

    &::placeholder{
        text-indent: 5px;
    }

    option {
        background-color: ${darkModeNavBarColor};
    }

    option:checked {
        color: #FFFFFF;
    }
`