import {BoxInput, TextArea} from './text-area-styles'

const TextAreas = (props) => {
  return (
      <TextArea 
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
  )
}

export { TextAreas } 