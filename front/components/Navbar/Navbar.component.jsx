import { Nav , Logo , Features , Left , Right , Item } from './Navbar.styles';

const Navbar = ({background = "transparent", color= "white"}) => {
  return (
    <Nav background={background}>
      <Logo color={color} href="/">Ayoub Kassi</Logo>
      <Features>
        <Left>
          <Item href="/software" color={color}>Software</Item>
          <Item href="/gear" color={color}>Gear</Item>
        </Left>
        <Right>
          <Item href="/contact" color={color}>Contact</Item>
        </Right>
      </Features>
    </Nav>
  )
}

export default Navbar;
