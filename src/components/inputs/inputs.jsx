import {BoxInput, Input} from './input-styles'

const Inputs = (props) => {
  return (
    <BoxInput>
      <Input 
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
    </BoxInput>
  )
}

export { Inputs } 