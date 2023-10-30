import styled from "styled-components";
import {darkModeNavBarColor} from '../../global-styles/colorScheme';




export const ButtonScripts = styled.button`
    background: ${darkModeNavBarColor};
    box-shadow: 0 0 6px #00000055;
    width: 70%;
    height: 3em;
    margin: 10px 3em;
    border-radius: 5px;
    color: #FFFFFF;
    transition: background-color: 0.3s;
    cursor: pointer;
`

