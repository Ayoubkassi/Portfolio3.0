import styled from 'styled-components';
import Image from 'next/image';

export const Item = styled.div`
  width : ${({ size }) => (size === 'medium' ? '40px' : '50px' )};
  padding : 10px 10px 3px 10px;
  background : white;
  border-radius : 50%;
  margin-right : 14px;
  margin-bottom : 14px;
  text-align : center;
  &:hover{
    cursor : pointer;
  }
  @media screen and (max-width : 550px){
    width : 38px;
    height : 38px;
    padding : 5px 0;
  }
`
export const Social = styled.div`
  display : flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'column' ? 'column' : 'row')};
`

export const StyledImage = styled(Image)`
@media screen and (max-width : 550px){
  width : 40px;
  height : 40px;
}
`
