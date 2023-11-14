import styled from "styled-components";
import {darkModeNavBarColor, darkModeIconsColor} from '../../global-styles/colorScheme';




export const FormButton = styled.button`
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

    &:active {
        background: ${darkModeNavBarColor + '55'};
    }
`

