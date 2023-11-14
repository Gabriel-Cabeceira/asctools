import { useState } from 'react';
import { FormContainer, Divisor, ScriptContainer, Script, GridContainer, ButtonDiv } from './register-styles';
import { Inputs } from '../../inputs/inputs';
import { TextAreas } from '../../text-area/text-area';
import { FormActionButton } from '../../form-buttons/form-buttons';

const RegisterInformationForm = () => {
  const [script, setScript] = useState('');
  const [formData, setFormData] = useState({
    protocol: '',
    customerName: '',
    customerPhone: '',
    customerUrl: '',
    customerMail: '',
    date: '',
    demand: '',
  });

  const [setBtnCopyTitle] = useState('Copiar');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleGenerateScript = (e) => {
    e.preventDefault();

    const { protocol, customerName, customerPhone, customerUrl, customerMail, date, demand } = formData;
    let generatedScript = `
      Protocolo: ${protocol}

      --- Demanda ---
    
      ${demand}
    
    `;

    if (customerName) {
      generatedScript += `
        --- Informações ---
        Nome do solicitante: ${customerName}
      `;
    }

    if (customerPhone) {
      generatedScript += `
        Telefone de Contato: ${customerPhone}
      `;
    }

    if (customerUrl) {
      generatedScript += `
        URL: ${customerUrl}
      `;
    }

    if (customerMail) {
      generatedScript += `
        E-mail: ${customerMail}
      `;
    }

    if (date) {
      generatedScript += `
        Data do ocorrido: ${date}
      `;
    }

    setScript(generatedScript);
  };

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

  return (
    <div>
      <FormContainer>
        <GridContainer>

            <Divisor>
              <Inputs
                placeholder='Protocolo'
                name='protocol'
                type='number'
                value={formData.protocol}
                onChange={(e) => setFormData({ ...formData, protocol: e.target.value })}
              />
            </Divisor>
            <Divisor>
              <Inputs
                placeholder='Nome do cliente'
                name='customerName'
                type='text'
                value={formData.protocol}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              />
            </Divisor>
            <Divisor>
              <Inputs
                placeholder='Telefone de contato'
                name='customerPhone'
                type='text'
                value={formData.protocol}
                onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
              />
            </Divisor>
            <Divisor>
              <Inputs
                placeholder='URL'
                name='customerUrl'
                type='text'
                value={formData.protocol}
                onChange={(e) => setFormData({ ...formData, customerUrl: e.target.value })}
              />
            </Divisor>
            <Divisor>
              <Inputs
                placeholder='E-mail'
                name='customerMail'
                type='text'
                value={formData.protocol}
                onChange={(e) => setFormData({ ...formData, customerMail: e.target.value })}
              />
            </Divisor>
            <Divisor>
              <Inputs
                placeholder='Data do ocorrido'
                name='date'
                type='date'
                value={formData.protocol}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </Divisor>
        </GridContainer>
        <Divisor>
              <TextAreas
                placeholder='Descreva a demanda...'
                name='demand'
                value={formData.demand}
                onChange={(e) => setFormData({ ...formData, demand: e.target.value })}
              />
        </Divisor>
        <FormActionButton type='button' title='Gerar Script' onClick={handleGenerateScript} />
        <FormActionButton type='reset' title='Limpar' />
      </FormContainer>


      {script && (
        <ScriptContainer className='script-paragraph'>
          <Script>
            <>
              <span>Protocolo: {formData.protocol}</span>
              <br/><br/>
              <span>--- Demanda ---</span>
              <br/><br/>
              <span>{formData.demand}</span>
              <br/><br/><br/>
              <span>--- Informações ---</span>
              <br/><br/>
              <span>Nome do solicitante: {formData.customerName}</span><br/>
              <span>Telefone do contato: {formData.customerPhone}</span><br/>
              <span>URL: {formData.customerUrl}</span><br/>
              <span>E-mail do contato: {formData.customerMail}</span><br/>
              <span>Data do ocorrido: {formData.date}</span>
            </>
          </Script>
        </ScriptContainer>
      )}

      {script ? (
        <ButtonDiv>
          <FormActionButton title='Copiar' disabled={isDisabled} onClick={handleCopy} />
        </ButtonDiv>
      ) : null}
    </div>
  );
};

export { RegisterInformationForm };