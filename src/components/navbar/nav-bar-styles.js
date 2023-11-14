import styled from "styled-components";
import { darkModeBackgroundColor, darkModeNavBarColor, darkModeBtnMenuColor } from '../../global-styles/colorScheme';

export const NavContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    width: 10em;
`

export const NavBar = styled.nav`
    position: fixed;
    inset: 40px 0 40px 20px;
    background: ${darkModeNavBarColor};
    width: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 0.2s ease;
    border-radius: 15px;

    ul {
        width: 100%;
        display: flex;
        flex-direction: column; 
    }
`

export const MenuToggle = styled.div`
    border-bottom: 1px solid #FFFFFF55;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 0 25px;
    

    &::before {
        content: '';
        position: absolute;
        width: 2em;
        height: 2px;
        background: ${darkModeBtnMenuColor};
        transform: translateY(${(props) => props.translateY ? `${props.translateY}` : '8px'}) rotate(${(props) => (props.rotate ? `${props.rotate}` : '0deg')});
        transition: 0.1s;
    }

    &::after {
        content: '';
        position: absolute;
        width: 2em;
        height: 2px;
        background: ${darkModeBtnMenuColor};
        transform: translateY(${(props) => props.translateY ? `-${props.translateY}` : '-8px'}) rotate(${(props) => (props.rotate ? `-${props.rotate}` : '0deg')});
        box-shadow: ${(props) => props.boxShadow};
        transition: 0.1s;
    }
`

