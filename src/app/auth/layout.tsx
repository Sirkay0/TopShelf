import React, { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        This is the Auth Laout
      {children}
    </div>
  )
}

export default AuthLayout
