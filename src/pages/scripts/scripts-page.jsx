import {Main, BoxScriptOptions, BoxLineDivision, BoxGeneralScripts, ScriptOptions, LineDivision, BoxInputScripts, BoxScripts} from './scripts-styles';
import { ScriptsButton } from '../../components/scripts-button/scripts-button';
import {Nav} from '../../components/navbar/navbar';
import { useState } from 'react';
import { SalutationForm } from '../../components/forms/salutation/salutation';
import { EscalationForm } from '../../components/forms/escalation/escalation'







const ScriptsPage = () => {

  // Gerencia a exibição dos formulários em tela
  const [form, setForm] = useState('');

  // Aplica qual formulário será exibido
  const handleFormScrips = (name) => {

    switch (name) {
      case 'salutation':
        setForm(<SalutationForm/>);
        break;

      case 'escalation':
        setForm(<EscalationForm/>);
        break;

      case 'clientScheduleUpdate':
        setForm('AGENDAMENTO DE ATUALIZAÇOES');
        break;

      case 'confirmScheduleUpdate':
        setForm('CONFIRMA AGENDAMENTO');
        break;

      case 'trelloScheduleUpdate':
        setForm('ATUALIZAÇOES TRELLO');
        break;

      case 'registerInfo':
        setForm('REGISTRO DE INFORMAÇOES');
        break;

      case 'ehz':
        setForm('EHZ');
        break

      default:
        setForm('');
    }
  }



  return (
    <Main>
      <Nav/>
      <BoxScriptOptions>
        <ScriptOptions className='scrollable-div'>
            <ScriptsButton title='Saudação' onClick={() => handleFormScrips('salutation')}/>

            <ScriptsButton title='Escalonamento' onClick={() => handleFormScrips('escalation')}/>

            <ScriptsButton title='Agendar Atualização (Cliente)' onClick={() => handleFormScrips('clientScheduleUpdate')}/>

            <ScriptsButton title='Confirmar Atualização' onClick={() => handleFormScrips('confirmScheduleUpdate')}/>

            <ScriptsButton title='Agendamento Atualização (Trello)' onClick={() => handleFormScrips('trelloScheduleUpdate')}/>

            <ScriptsButton title='Registro de informações' onClick={() => handleFormScrips('registerInfo')}/>

            <ScriptsButton title='EHZ' onClick={() => handleFormScrips('ehz')}/>
        </ScriptOptions>
      </BoxScriptOptions>

      <BoxLineDivision>
        <LineDivision/>
      </BoxLineDivision>

      <BoxGeneralScripts>
        <BoxInputScripts>
          {form}
        </BoxInputScripts>

      </BoxGeneralScripts>
    </Main>
  )
}

export { ScriptsPage }
