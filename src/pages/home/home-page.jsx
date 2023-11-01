import {Main, HomeContent, TitleContainer, BoxesContainer, ArticleContainer, FooterContainer, NewsSection, FooterImage, FooterParagraph } from './home-styles';
import {Nav} from '../../components/navbar/navbar';
import Logo  from '../../assets/images/logo.png';
import { ListItems } from '../../components/list-items/list-items'

const HomePage = () => {
  return (
    <Main>
      <Nav/>
      <HomeContent>

        <TitleContainer>
          <h1>ASC TOOLS</h1>
        </TitleContainer>

        <BoxesContainer>
          <ArticleContainer>
            <h2>Atalhos utilitários</h2>
            <ul>

              <ListItems title='3000 Externo' link='https://business.ascbrazil.com.br:3000/dashboard'/>
              <ListItems title='3000 Interno' link='https://192.168.0.5:3000/'/>
              <ListItems title='Nagios ASC' link='https://nagios.ascbrazil.com.br/'/>
              <ListItems title='Nagios AWS' link='https://nagios-aws.ascbrazil.com.br/'/>
              <ListItems title='Trello' link='https://trello.com/b/b8mYnTMI/suporte'/>
              <ListItems title='Códigos de erro - Meta' link='https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes/'/>
              <ListItems title='Docs Meta sobre HSM' link='https://developers.facebook.com/docs/whatsapp/message-templates/guidelines'/>
            </ul>
          </ArticleContainer>

          <NewsSection>
            <h2>News</h2>
          </NewsSection>
        </BoxesContainer>

        <FooterContainer>
          <FooterImage src={Logo} alt='Logo ASC Brazil'/>
          <FooterParagraph>Associated Software Company</FooterParagraph>
        </FooterContainer>

      </HomeContent>
    </Main>
  )
}

export { HomePage }
