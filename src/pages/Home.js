import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      This is home
      <Link to="/ErrorPage">Go to Error Page</Link>
    </div>
  )
}

export default Home;