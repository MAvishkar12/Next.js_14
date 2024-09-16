import React from 'react'
import { notFound } from 'next/navigation'
function page({params}) {
  if(params.reviewid>100){
    notFound();
  }
  return (
    <div>Review id {params.reviewid} of product id{params.productid} </div>
  )
}

export default page