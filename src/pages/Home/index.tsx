import {Producto} from '../../components/Products'
import {useEffect , useState} from 'react'

import {
  Container,
  Header,
  ShoppingIcon,
  Avatar,
  Name,
  Title,
  Description,
  Button
} from './styles'
import axios from 'axios'

interface PropsProducto{
  id: string
  name:string
  images: string[]
}

export function Home(){
  const [producto , setProducto] = useState<PropsProducto>()

  useEffect( ()=> {
    async function get(){
      const response = await axios.get('http://localhost:3001/')

      const data = await response.data

      setProducto(data)

    } 

    get()
  } , [])
  return(
    <Container>
       <Header>
          <div className='links'>
            <strong>Artuno</strong>
              <ul>
                <li>
                  <a className='active' href="">Products</a>
                  <a href="">About</a>
                  <a href="">Contact</a>
                </li>
              </ul>
          </div>


          <div className='avatar'>
            <ShoppingIcon/>
            <Avatar src='https://github.com/Prg-Maker.png'/>
            <Name>Daniel</Name>
          </div>  
        </Header>


      <div className='left'>
        <Title>Watches that show much <br /> more than just time </Title>
        <Description>Handpicked collection of premium time keepers <br /> for all purposes and ages.</Description>


        <Button>Explore</Button>

        <div className='cards'>
          <Producto
            id={producto?.id}
            key={producto?.id}
            price='R$80'
            img= {producto?.images[0]}
            name={producto?.name}
          />

        </div>

      </div>




      <div className='rigth'>
        
      </div>
    </Container>
  )
}