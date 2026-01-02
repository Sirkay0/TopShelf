import Link from 'next/link'
import React from 'react'
import RootLayout from './layout'

const NotFoundPage = () => {
  return (
    <div>
      Not Found, check another URl
      <Link href={"/"} className='cursor-pointer'>Go back to Home Page</Link>
    </div>
  )
}

export default NotFoundPage