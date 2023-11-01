import { useState, useEffect } from 'react';
import { FormContainer, Divisor, ScriptContainer, Script, Signature, ButtonDiv, SelectLanguage } from './salutation-styles';
import { Inputs } from '../../inputs/inputs';
import { Selects } from '../../selects/selects';
import { FormActionButton } from '../../form-buttons/form-buttons';

const SalutationForm = () => {
  // Estado inicial do script
  const [script, setScript] = useState(''); 

  // Estado inicial do formulário
  const [formData, setFormData] = useState({ 
    contactName: '', 
    sla: '',
    substantive: '',
  });

  // Gerencia o estado da expressão 'bem vindo' em português
  const [saudacao, setSaudacao] = useState('bem vindo');

  // Gerencia o estado da expressão 'seja/sejam' em português
  const [ser, setSer] = useState('seja');

  // Gerencia o estado da expressão 'possa/possam' em português
  const [poder, setPoder] = useState('possa');

  // Gerencia o estado do gênero em espanhol
  const [genero, setGenero] = useState('masculino');

  // Gerencia o estado dos verbos em espanhol
  const [verboSer, setVerboSer] = useState('sea');
  const [verboPoder, setVerboPoder] = useState('pueda');

  useEffect(() => {
    // Atualizar saudação com base no substantivo selecionado
    if (formData.substantive === 'plural') {
      setSaudacao('bem vindos');
      setSer('sejam');
      setPoder('possam');
      setGenero('masculino'); // "plural" é geralmente masculino em espanhol
      setVerboSer('sean');
      setVerboPoder('puedan');
    } else if (formData.substantive === 'female') {
      setSaudacao('bem vinda');
      setSer('seja');
      setPoder('possa');
      setGenero('feminino'); // "female" é feminino em espanhol
      setVerboSer('sea');
      setVerboPoder('pueda');
    } else {
      setSaudacao('bem vindo'); // Caso padrão (masculino)
      setGenero('masculino');
      setVerboSer('sea');
      setVerboPoder('pueda');
    }
  }, [formData.substantive]);

  const [language, setLanguage] = useState('pt');


  // Gerencia a criação do script
  const handleGenerateScript = (e) => {
    e.preventDefault();

    const { contactName, sla } = formData;
    let generatedScript = '';

    if (language === 'pt') {
      generatedScript = `
      Olá ${contactName}, ${ser} muito ${saudacao} ao mundo ASCBrazil!
      
      Estamos analisando a sua solicitação e informaremos o status neste chamado para que ${poder} acompanhar e validar se está tudo OK.
      
      O tempo estimado de resposta é de até ${sla} horas úteis.
      
      Lembrando que poderá ser concluído antes! Quaisquer novidades, informaremos e precisando pode nos chamar.
      `;
    } else if (language === 'en') {
      generatedScript = `
      Hello ${contactName}, welcome to the ASCBrazil world!

      We are reviewing your request and will provide the status in this ticket so you can follow up and confirm if everything is okay.
      
      The estimated response time is up to ${sla} business hours.
      
      Remember that it may be completed earlier! We will inform you of any updates, and if you need assistance, feel free to reach out.
      `;
    } else if (language === 'es') {
      generatedScript = `
      Hola ${contactName}, ${verboSer} muy ${saudacao} al mundo ASCBrazil.

      Estamos revisando tu solicitud y te proporcionaremos el estado en este ticket para que ${verboPoder} dar seguimiento y confirmar si todo está en orden.
      
      El tiempo estimado de respuesta es de hasta ${sla} horas hábiles.
      
      Recuerda que podría completarse antes. Te informaremos de cualquier novedad y, si necesitas ayuda, no dudes en contactarnos.
      `;
    }

    setScript(generatedScript);
  };


  // Configra a função de cópia
  const [btnCopyTitle, setBtnCopyTitle] = useState('Copiar');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCopy = () => {
    const textToCopy = document.querySelector('.script-paragraph');
    const text = textToCopy.innerText;

    navigator.clipboard.writeText(text).then(() => {
      setBtnCopyTitle('Copiado!');
      setIsDisabled(true);

      setTimeout(() => {
        setIsDisabled(false);
        setBtnCopyTitle('Copiar');
      }, 3000);
    });
  };


  // Gerencia a função de setar linguagem
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <FormContainer>
        <div className='inputs-and-selects'>
          <Divisor>
            <Inputs
              placeholder='Nome do Contato'
              name='contact-name'
              type='text'
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            />
          </Divisor>

          <Divisor>
            <Selects
              name='sla'
              value={formData.sla}
              onChange={(e) => setFormData({ ...formData, sla: e.target.value })}
            >
              <option value=''>Selecione um SLA</option>
              <option value='4'>4 horas úteis</option>
              <option value='8'>8 horas úteis</option>
              <option value='24'>24 horas úteis</option>
              <option value='48'>48 horas úteis</option>
            </Selects>
          </Divisor>

          <Divisor>
            <Selects
              name='substantive'
              value={formData.substantive}
              onChange={(e) => setFormData({ ...formData, substantive: e.target.value })}
            >
              <option value=''>Substantivo</option>
              <option value='plural'>Plural</option>
              <option value='female'>Singular Feminino</option>
              <option value='male'>Singular Masculino</option>
            </Selects>
          </Divisor>
        </div>

        <Divisor>
          <FormActionButton type='button' title='Gerar Script' onClick={handleGenerateScript} />
          <FormActionButton type='reset' title='Limpar' />

          <SelectLanguage value={language} onChange={handleLanguageChange}>
            <option value='pt'>Português</option>
            <option value='en'>Inglês</option>
            <option value='es'>Espanhol</option>
          </SelectLanguage>
        </Divisor>
      </FormContainer>


      <ScriptContainer className='script-paragraph'>
        <Script>
          {script.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Script>

        {script && language === 'pt' ? (
          <Signature>
            <span>Atenciosamente,</span><br/>
            <span>Time Helpdesk | ASC Brazil</span>
          </Signature>
        ) : null}
        {script && language === 'en' ? (
          <Signature>
            <span>Sincerely,</span><br/>
            <span>Helpdesk Team | ASC Brazil</span>
          </Signature>
        ) : null}
        {script && language === 'es' ? (
          <Signature>
            <span>Atentamente,</span><br/>
            <span>Equipo de ayuda | ASC Brazil</span>
          </Signature>
        ) : null}
      </ScriptContainer>

      {script ? (
        <ButtonDiv>
          <FormActionButton title={btnCopyTitle} disabled={isDisabled} onClick={handleCopy} />
        </ButtonDiv>
      ) : null}
    </div>
  );
};

export { SalutationForm };