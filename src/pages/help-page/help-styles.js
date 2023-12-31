import styled from "styled-components";
import { darkModeNavBarColor, darkModeBackgroundColor } from '../../global-styles/colorScheme'


export const Main = styled.div`
    display: flex;
    align-items: center;
`

export const HelpContent = styled.div`
    width: 80vw;
    height: 90vh;
    margin-left: 5em;



    background-color: ${darkModeNavBarColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
`
