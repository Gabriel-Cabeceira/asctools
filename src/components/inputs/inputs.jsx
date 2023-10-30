import {BoxInput, Input} from './input-styles'

const Inputs = (props) => {
  return (
    <BoxInput>
      <Input placeholder={props.placeholder}/>
    </BoxInput>
  )
}

export { Inputs } 