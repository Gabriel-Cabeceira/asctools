import styled from "styled-components";
import { darkModeFontColor } from '../../../global-styles/colorScheme'


export const FormContainer =styled.form`

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

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
`

export const Script = styled.article`
    color: ${darkModeFontColor};

    p {
        margin-bottom: 1em;
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`

