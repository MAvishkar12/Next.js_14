import Link from 'next/link'
import React from 'react'

function page() {
  const num=100;
  return (
    <>
    <div>Item Details</div>
    <h1><Link href="products/1">Item 1</Link></h1>
    <h1><Link  href="products/2">Item 2</Link></h1>
    <h1><Link  href="products/3">Item 3</Link></h1>
    <h1><Link  href="products/4" replace>Item 4</Link></h1>
    <h1><Link  href={`products/${num}`}>Item {num}</Link></h1>
   
    <Link href="/">Home</Link>
    </>
    
  )
}

export default page