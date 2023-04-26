import React, { type ReactNode } from 'react'

export interface HomeProps {
  children?: ReactNode
}

const Home: React.FC<HomeProps> = (props) => {

  return <>
    <h1>Home</h1>
  </>
}

export default Home
