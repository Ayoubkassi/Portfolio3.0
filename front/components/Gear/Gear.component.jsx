import { Main , Title , Description , Features } from './Gear.styles';
import data from  '../../data.json';
import  Feature from '../Feature/Feature.component';



const Gear = () => {
  return (
    <Main>
      <Title>My Gear</Title>
      <Description>Here is a list of camera, computer and electronics equipment used in my day to day work. As an Amazon and Adobe Associate, I earn from qualifying purchases.</Description>
      <Features>
        { data.gear.map((item)=>(
            <Feature color="black" item={item} key={item.title} />
        )) }
      </Features>
    </Main>
  )
}

export default Gear;
