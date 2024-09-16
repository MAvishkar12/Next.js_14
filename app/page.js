import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div>Welcome Home Component  </div>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
    </>
  )
}

export default page
