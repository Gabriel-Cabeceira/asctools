import { useState, useEffect } from 'react';
import { FormContainer, Divisor, ScriptContainer, Script, Signature, ButtonDiv, SelectLanguage } from './escalation-styles';
import { Inputs } from '../../inputs/inputs';
import { Selects } from '../../selects/selects';
import { FormActionButton } from '../../form-buttons/form-buttons';

const EscalationForm = () => {
  // Estado inicial do script
  const [script, setScript] = useState(''); 

  // Estado inicial do formulário
  const [formData, setFormData] = useState({ 
    contactName: '', 
    sla: '',
    substantive: '',
    section: '',
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

  const setorNomes = {
    pt: {
      Infraestrutura: 'Infraestrutura',
      'HelpDesk N2': 'HelpDesk N2',
      Financeiro: 'Financeiro',
      Desenvolvimento: 'Desenvolvimento',
      Contratos: 'Contratos',
      Comercial: 'Comercial',
      Projetos: 'Projetos',
      'Segurança da Informação': 'Segurança da Informação',
      Treinamento: 'Treinamento',
      LGPD: 'LGPD',
    },
    en: {
      Infraestrutura: 'Infrastructure',
      'HelpDesk N2': 'HelpDesk N2',
      Financeiro: 'Financial',
      Desenvolvimento: 'Development',
      Contratos: 'Contracts',
      Comercial: 'Commercial',
      Projetos: 'Projects',
      'Segurança da Informação': 'Information Security',
      Treinamento: 'Training',
      LGPD: 'LGPD',
    },
    es: {
      Infraestrutura: 'Infraestructura',
      'HelpDesk N2': 'HelpDesk N2',
      Financeiro: 'Finanzas',
      Desenvolvimento: 'Desarrollo',
      Contratos: 'Contratos',
      Comercial: 'Comercial',
      Projetos: 'Proyectos',
      'Segurança da Información': 'Seguridad de la Información',
      Treinamento: 'Entrenamiento',
      LGPD: 'LGPD',
    },
  };

  useEffect(() => {
    // Atualizar saudação com base no substantivo selecionado
    if (formData.substantive === 'plural') {
      setSaudacao('bem vindos');
      setSer('sejam');
      setPoder('possam');
      setGenero('plural');
      setVerboSer('sean');
    } else if (formData.substantive === 'female') {
      setSaudacao('bem vinda');
      setSer('seja');
      setPoder('possa');
      setGenero('feminino');
      setVerboSer('sea');
    } else {
      setSaudacao('bem vindo'); // Caso padrão (masculino)
      setGenero('masculino');
      setVerboSer('sea');
    }
  }, [formData.substantive]);

  const [language, setLanguage] = useState('pt');


  // Gerencia a criação do script
  const handleGenerateScript = (e) => {
    e.preventDefault();

    const { contactName, sla, section } = formData;
    let generatedScript = '';

    if (language === 'pt') {
      generatedScript = `
      Olá ${contactName}, ${ser} muito ${saudacao} ao mundo ASCBrazil!
      
      O seu chamado foi encaminhado para o setor ${setorNomes[language][section]} e informaremos nesta OS para que possam acompanhar e validar se está tudo Ok!
      
      O tempo estimado de resposta é de até ${sla} horas úteis.
      
      Lembrando que poderá ser concluído antes! Quaisquer novidades, informaremos e precisando pode nos chamar.
      `;
    } else if (language === 'en') {
      generatedScript = `
      Hello ${contactName}, ${ser === 'seja' ? 'welcome' : 'welcome'} to the ASCBrazil’s world!

      Your call has been forwarded to the ${setorNomes[language][section]} sector and we will inform you on this SO so that we can monitor and validate that everything is ok!
      
      Estimated response time is up to ${sla} business hours.
      
      Remembering that it can be solved before and whenever you need it, you are very welcome to call us!
      `;
    } else if (language === 'es') {
      let greeting = ''; // Saudação em espanhol
      if (genero === 'masculino') {
        greeting = 'bienvenido';
      } else if (genero === 'feminino') {
        greeting = 'bienvenida';
      } else if (genero === 'plural') {
        greeting = 'bienvenidos';
      }

      generatedScript = `
      Hola ${contactName}, ${verboSer} muy ${greeting} al mundo ASCBrazil!

      ¡Tu llamada ha sido reenviada al sector ${setorNomes[language][section]} y te informaremos sobre este SO para que podamos monitorear y validar que todo está bien!
      
      El tiempo estimado de respuesta es de hasta ${sla} horas hábiles.
      
      ¡Recordando que se puede resolver antes y que puede llamarnos siempre que lo necesite!
      `;
    }

    setScript(generatedScript);
  };


  // Configura a função de cópia
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


  // Gerencia a função de definir linguagem
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
              name='section'
              value={formData.section}
              onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            >
              <option value=''>Selecione um Setor</option>
              <option value='Infraestrutura'>Infraestrutura</option>
              <option value='HelpDesk N2'>HelpDesk N2</option>
              <option value='Financeiro'>Financeiro</option>
              <option value='Desenvolvimento'>Desenvolvimento</option>
              <option value='Contratos'>Contratos</option>
              <option value='Comercial'>Comercial</option>
              <option value='Projetos'>Projetos</option>
              <option value='Segurança da Informação'>Segurança da Informação</option>
              <option value='Treinamento'>Treinamento</option>
              <option value='LGPD'>LGPD</option>
            </Selects>
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
            <span>Best regards,</span><br/>
            <span>Helpdesk Team | ASC Brazil</span>
          </Signature>
        ) : null}
        {script && language === 'es' ? (
          <Signature>
            <span>Atentamente,</span><br/>
            <span>Equipo de soporte | ASC Brazil</span>
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

export { EscalationForm };