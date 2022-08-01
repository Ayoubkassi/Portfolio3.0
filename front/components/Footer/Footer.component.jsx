import  { Main , Item } from './Footer.styles';
import Link  from 'next/link';



const Footer = () => {
  return (
    <Main>
      <Item href="/" crossOrigin="anonymous">Home</Item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <Item href="/software" crossOrigin="anonymous">Software</Item>
      <p style={{color : "#3d3d3d" }}>|</p>
      <Item href="/gear" crossOrigin="anonymous">Gear</Item>
      <Link href="/login" crossOrigin="anonymous" style={{color : "#3d3d3d", textDecoration: "none" , cursor: "auto"}}>|</Link>
      <Item href="/contact" crossOrigin="anonymous">Contact</Item>
    </Main>
  )
}

export default Footer;
