import React, { useContext } from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import loadingImage from '../images/preloader.gif'
import { GithubContext } from '../context/context'

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext)

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt='loading image' className='loading-img' />
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <div className='content'>
        <Search />
        <Info />
        <User />
        <Repos />
      </div>
    </main>
  )
}

export default Dashboard
