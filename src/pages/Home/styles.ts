import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai'
export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 60% auto;

  .left{
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 248, 228, 0.88) 52.08%, rgba(255, 255, 255, 0.8272) 100%);
    backdrop-filter: blur(400px);
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    padding-left: 25px;

    .cards{
      display: flex;
      gap: 50px;

    }
  }
  .rigth{
    background: black;
    background: linear-gradient(225.2deg, rgba(37, 37, 37, 0.87) -9.2%, #0B0A0A 109.22%);
    backdrop-filter: blur(300px);
  }   
`;


export const Header = styled.div`
  width: 100%;
  z-index: 2;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 43px 105px 0 0px;

  .links{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 105.32%;


    color: #282828;

    ul{
      list-style:none;
      li{
        a+a{
          margin: 0 50px;
        }

        a{
          &.active , &:hover{
           border-bottom: 2px solid #90FF04;
           transition: 0.2s;
          }

        }
       
      }
    }

  }  

  .avatar{
    display: flex;
    align-items: center;
    padding-right: 16px;
    color: white;
  }

`


export const ShoppingIcon = styled(AiOutlineShoppingCart)`
  width: 20px;
  height: 20px;
`
export const Avatar = styled.img`
   width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 20px;
`
export const Name = styled.p`

font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 186.9%;
/* or 37px */

display: flex;
align-items: center;

`



export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 67px;

  color: #282828;
`
export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 45px;


  color: #000000;

`
export const Button = styled.button`
  width: 106px;
  height: 50px;
  background: red;
  border-radius: 8px;
  background: #282828;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`