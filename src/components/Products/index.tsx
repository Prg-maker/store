import styled from 'styled-components';
import {useState , useEffect} from 'react'


interface ProductosProps{
  id?: string
  name?: string;
  img?: string;
  price:string
}

const Container = styled.div`
  width: 210px;
  height: 325px;
  background: white;
  box-shadow: 5px 5px 5px 5px #888888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
`;


const Image = styled.img`
  width: 125px;
  height: 125px;
  object-fit: contain;
`

const Title = styled.p`
    font-style: normal;
    font-weight: normal;
    padding-top: 5px;
    font-size: 20px;
    line-height: 186.9%;

    text-align: center;

    color: #282828;

`
const Price = styled.strong`
  font-style: normal;
  font-weight: 400;
  line-height: 186.9%;
  /* identical to box height, or 45px */


  color: #282828;

`
const Button = styled.button`
  width: 134px;
  height: 41px;
  left: 134px;
  top: 871px;
  margin-top: 5px;
  border: 1px solid #282828;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
`


export function Producto({
  id,
  name,
  img,
  price
}:ProductosProps){
  return(
    <Container>

      <a href={`/${id}`}>
        <Image src={img}/>
      </a>
      <Title>{name}</Title>
      <Price>{price}</Price>

      <form action='http://localhost:3001/create-checkout-session' method='post'>
        <Button type='submit'>Buy</Button>
      </form>
    </Container>
  )
}