import { ArticleContainer, InfoContent } from './box-info-styles'

const BoxInfo = (props) => {
  return (
    <ArticleContainer>
      <section>
        <h1>{props.title}</h1>
      </section>
      <InfoContent>
        {props.content}
      </InfoContent>
    </ArticleContainer>
  )
}

export { BoxInfo }