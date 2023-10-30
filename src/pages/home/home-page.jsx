import {Main, HomeContent, TitleContainer, BoxesContainer, FooterContainer, FooterImage } from './home-styles';
import { BoxInfo } from '../../components/box-info/box-info'
import {Nav} from '../../components/navbar/navbar';
import Logo  from '../../assets/images/logo.png'

const HomePage = () => {
  return (
    <Main>
      <Nav/>
      <HomeContent>

        <TitleContainer>
          <h1>ASC TOOLS</h1>
        </TitleContainer>

        <BoxesContainer>
          <BoxInfo title='Atalhos Utilitários' content='Teste'/>
          <BoxInfo title='Note Releases' content='Teste'/>
          <BoxInfo title='OSs Modelo' content='Teste'/>
        </BoxesContainer>

        <FooterContainer>
          <FooterImage src={Logo} alt='Logo ASC Brazil'/>
        </FooterContainer>

      </HomeContent>
    </Main>
  )
}

export { HomePage }
