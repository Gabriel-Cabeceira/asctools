import {ButtonScripts} from './scripts-button-styles';

const ScriptsButton = (props) => {

  return (
    <ButtonScripts onClick={props.onClick}>
      {props.title}
    </ButtonScripts>
  )
}

export {ScriptsButton}