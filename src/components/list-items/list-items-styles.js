import styled from "styled-components";
import { darkModeIconsColor, darkModeBackgroundColor, darkModeNavBarColor } from '../../global-styles/colorScheme'

export const ListItem = styled.li`
    margin: 1em 0;
`

export const LinkTo = styled.a`
    font-size: 1em;
    font-style: italic;
    margin-bottom: 0.3em;
    cursor: pointer;

    &:hover {
        color: ${darkModeIconsColor};
    }
`
