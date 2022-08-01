import { Nav , Logo , Features , Left , Right , Item } from './Navbar.styles';

const Navbar = ({background = "transparent", color= "white"}) => {
  return (
    <Nav background={background}>
      <Logo color={color} href="/" crossOrigin="anonymous">Ayoub Kassi</Logo>
      <Features>
        <Left>
          <Item href="/software" crossOrigin="anonymous" color={color}>Software</Item>
          <Item href="/gear" crossOrigin="anonymous" color={color}>Gear</Item>
        </Left>
        <Right>
          <Item href="/contact" crossOrigin="anonymous" color={color}>Contact</Item>
        </Right>
      </Features>
    </Nav>
  )
}

export default Navbar;
