import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import {BsArrowLeft} from 'react-icons/bs'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.88) 0%,
    rgba(255, 248, 228, 0.88) 52.08%,
    rgba(255, 255, 255, 0.8272) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
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
`;
const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  padding-top: 5px;
  font-size: 20px;
  line-height: 186.9%;

  text-align: center;

  color: #282828;
`;
const Price = styled.strong`
  font-style: normal;
  font-weight: 400;
  line-height: 186.9%;
  /* identical to box height, or 45px */
  font-size: 20px;

  color: #282828;
`;

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
`;

const Details  = styled.p`
  margin-left: 20px;
  font-size: 20px;
  width: 50%;
`

const ArrowLeft = styled(BsArrowLeft)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px  0 0 20px;

`

interface PropsProducto {
  id: string;
  name: string;
  images: string[];
}
export function Detailsproducts() {
  const [producto, setProducto] = useState<PropsProducto>();

  useEffect(() => {
    async function get() {
      const response = await axios.get("http://localhost:3001/");

      const data = await response.data;

      setProducto(data);
    }

    get();
  }, []);

  return (
    <Container>
      <a href="/">
        <ArrowLeft/>
      </a>

      <CardContainer>
        <Image src={producto?.images[0]} />
        <Title>{producto?.name}</Title>
        <Price>$80</Price>

        <form
          action="http://localhost:3001/create-checkout-session"
          method="post"
        >
          <Button type="submit">Buy</Button>
        </form>
      </CardContainer>

      <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloribus,
        magnam ex dolore consequuntur autem enim. Soluta, repudiandae qui
        consectetur, molestiae corporis distinctio quasi perspiciatis similique
        et fugit fugiat sit?
      </Details>
    </Container>
  );
}
