import { ButtonConfig, Text, Icon } from './button-styles'

const Button = (props) => {
  return (
    <ButtonConfig onClick={props.onClick} buttonColor={props.color} state={props.state}>
      <Icon state={props.state}>{props.icon}</Icon>
      <Text state={props.state}>{props.text}</Text>
    </ButtonConfig>
  )
}

export { Button }