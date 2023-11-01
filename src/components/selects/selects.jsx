import {BoxSelect, Select} from './select-styles'

const Selects = (props) => {
  return (
    <BoxSelect>
      <Select name={props.name} onChange={props.onChange}>
        {props.children}
      </Select>
    </BoxSelect>
  )
}

export { Selects } 