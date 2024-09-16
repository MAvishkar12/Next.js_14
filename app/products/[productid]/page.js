import React from 'react'

function page({params}) {
  return (
    <div>
      product details  {params.productid}
    </div>
  )
}

export default page
