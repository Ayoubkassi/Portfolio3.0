import  { Main , Item } from './Footer.styles';
import Link  from 'next/link';



const Footer = () => {
  return (
    <Main>
      <Item href="/">Home</Item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <Item href="/software">Software</Item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <Item href="/gear">Gear</Item>
      <Link href="/login" style={{color : "#3d3d3d", textDecoration: "none" , cursor: "auto"}}>|</Link>
      <Item href="/contact">Contact</Item>
    </Main>
  )
}

export default Footer;
