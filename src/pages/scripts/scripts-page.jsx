import {Main, BoxScriptOptions, BoxLineDivision, BoxGeneralScripts, ScriptOptions, LineDivision, BoxInputScripts, BoxScripts} from './scripts-styles';
import {Inputs} from '../../components/inputs/inputs';
import { TextScripts } from '../../components/text-scripts/text-scripts';
import { ScriptsButton } from '../../components/scripts-button/scripts-button';
import {Nav} from '../../components/navbar/navbar';


const TextTest = `
Olá Gabriel, seja muito bem vindo ao mundo ASCBrazil!

O seu chamado foi encaminhado para o setor Infraestrutura e informaremos nesta OS para que possam acompanhar e validar se está tudo Ok!

O novo tempo estimado de resposta é de até 48 horas úteis.

Lembrando que poderá ser concluído antes! Quaisquer novidades, o manteremos informados e precisando pode nos chamar.

Atenciosamente,
Time Helpdesk AscBrazil
`


const ScriptsPage = () => {
  return (
    <Main>
      <Nav/>
      <BoxScriptOptions>
        <ScriptOptions className='scrollable-div'>
            <ScriptsButton name='Suadação'/>
            <ScriptsButton name='Escalonamento'/>
            <ScriptsButton name='Agendar Atualização (Cliente)'/>
            <ScriptsButton name='Confirmar Atualização'/>
            <ScriptsButton name='Agendamento Atualização (Trello)'/>
            <ScriptsButton name='Registro de informações'/>
            <ScriptsButton name='EHZ'/>
        </ScriptOptions>
      </BoxScriptOptions>

      <BoxLineDivision>
        <LineDivision/>
      </BoxLineDivision>

      <BoxGeneralScripts>
        <BoxInputScripts>
            <Inputs placeholder='Nome do Contato'/>
            <Inputs placeholder='Setor'/>
            <Inputs placeholder='SLA'/>
            <Inputs placeholder='Substantivo'/>
        </BoxInputScripts>

        <BoxScripts>
            <TextScripts text={TextTest}/>
        </BoxScripts>
      </BoxGeneralScripts>
    </Main>
  )
}

export { ScriptsPage }
