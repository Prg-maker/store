import express  from "express";
import StriperConfig from "./config/striper";
import Stripe  from 'stripe'
import cors from 'cors'

const server = express()

const stripe = new Stripe(StriperConfig.secretKey , {
  apiVersion: "2020-08-27"
})

server.use(cors({
  origin: '*'
}))

const PORT = 'http://localhost:3001'
const PORT_Redirect = 'http://localhost:3000'

server.post('/create-checkout-session' , async (req , res)=> {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1KrUsnHgLGU2rQBoyHx403ap',
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${PORT}?success=true`,
    cancel_url: `${PORT_Redirect}/`
  })


  const products = await stripe.products.list()


  const url = session.url as string
  return res.redirect(url)
})


 
server.get('/', async (req ,res)=> {
  const products = await stripe.products.list()
  
  const product = products.data[0]
  return res.json(product)
  
})



server.listen(3001 , ()=> console.log('server is runnign'))