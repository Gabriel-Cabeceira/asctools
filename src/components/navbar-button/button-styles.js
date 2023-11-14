import styled from "styled-components";
import { darkModeBackgroundColor, darkModeIconsColor, darkModeBtnInactive } from '../../global-styles/colorScheme';




export const ButtonConfig = styled.button`
    background: ${(props) => (props.buttonColor ? `${props.buttonColor}` : '#FFFFFF')};
    display: flex;
    align-items: center;
    padding: 1em 0 1em 1.3em;
    margin-left: 10px;
    width: calc(100% - 10px);
    border-radius: 20px 0 0 20px;
    cursor: pointer;
    position: relative;

    ${(props) => (props.state ? `


        &::before {
            content: '';
            position: absolute;
            top: -20px;
            right: 0;
            width: 20px;
            height: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 6px 5px 0 5px ${darkModeBackgroundColor};
            background: transparent;
        }

        &::after {
            content: '';
            position: absolute;
            top: 56px;
            right: 0;
            width: 20px;
            height: 20px;
            border-top-right-radius: 20px;
            box-shadow: 6px -5px 0 5px ${darkModeBackgroundColor};
            background: transparent;
            z-index: 1;
        }
        
    ` : false)}
`

export const Text = styled.span`
    font-size: 1.1em;
    font-family: Arial;
    margin-left: 1em;

    ${(props) => (props.state ? `
        color: ${darkModeIconsColor};
    ` : `
        color: ${darkModeBtnInactive};
    `)};
`;



export const Icon = styled.span`

    svg{
        font-size: 2em;

        ${(props) => (props.state ? `
        color: ${darkModeIconsColor};
    ` : `
        color: ${darkModeBtnInactive};
    `)};
    }
`

