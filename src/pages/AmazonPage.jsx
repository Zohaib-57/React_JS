import React from 'react'
import AmzData from './AmzData'

const AmazonPage = () => {
  return (
    <>
    <AmzData title={"Logitech MX master"} idx={0} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmHGAuqkNAu4qqtWOOAKzEet5n7tGp1yK0IZvQ50uFFEK4Cp3Y1pcFj186FLVknN1H24&usqp=CAU"/>
    <AmzData title={"Apple Pencil (2nd GEN)"} idx={1} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxa9chFFNMcTWEFjzwHYuZaJTWY7Rmf5_HA&s"/>
    <AmzData title={"Zerronics zeb Transformer"} idx={2} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmNPocedgv4g8PErI5C4k0GIxVo8RgAKdYg&s"/>
    <AmzData title={"Petronic Toad 23"} idx={3} img="https://images-eu.ssl-images-amazon.com/images/I/51mT2OeTZ2L._AC_UL495_SR435,495_.jpg"/>
    </>
  )
}

export default AmazonPage