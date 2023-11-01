import {FormButton} from './form-buttons-styles';

const FormActionButton = (props) => {

  return (
    <FormButton type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {props.title}
    </FormButton>
  )
}

export {FormActionButton}