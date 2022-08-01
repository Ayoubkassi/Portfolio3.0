import { Item, Social , StyledImage } from './Social.styles';
import youtube from '../../assets/youtube.svg';
import snap from '../../assets/snapchat.svg';
import discord from '../../assets/discord.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import message from '../../assets/message.svg';
import twitter from '../../assets/twitter.svg';

const Media = ({flexDirection, size}) => {
  return (
    <Social flexDirection={flexDirection} >
      <Item size={size}><StyledImage src={youtube} alt="youtube" style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><StyledImage src={snap} alt="snap" style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><StyledImage src={discord} alt="discord" style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><StyledImage src={github} alt="github" style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><StyledImage src={instagram} alt="instagram" style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><StyledImage src={message} alt="message" style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><StyledImage src={twitter} alt="twitter" style={{width : size ? '20px' : '40px'}}/></Item>
    </Social>
  )
}

export default Media;
