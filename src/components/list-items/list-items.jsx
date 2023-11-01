import { ListItem, LinkTo } from './list-items-styles'

const ListItems = (props) => {
  return (
    <ListItem>
        <LinkTo href={props.link} target='_blank'>
          {props.title}
        </LinkTo>
    </ListItem>
  )
}

export { ListItems }