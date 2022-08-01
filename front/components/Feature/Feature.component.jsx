import { Section , Title , List , Item } from './Feature.styles';

const Feature = ({item , color}) => {
  return (
    <Section color={color}>
      <Title>{item.title}</Title>
      <List>
        { item.items.map((element)=>(
          <Item key={element.title}>{element}</Item>
        )) }
      </List>
    </Section>
  )
}

export default Feature;
