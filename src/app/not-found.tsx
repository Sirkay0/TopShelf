import Link from 'next/link'
import React from 'react'
import RootLayout from './layout'

const NotFoundPage = () => {
  return (
    <div>
      Not Found, check another URl
      <Link href={"/"}>Go back to Home Page</Link>
    </div>
  )
}

export default NotFoundPage