import { useParams } from "react-router-dom"

export function Detailsproducts(){

  const {id} = useParams()


  return(
    <>
      <h1>{id}</h1>
    </>
  )
}