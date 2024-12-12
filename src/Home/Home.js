import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import TopHoldings from '../Main/Main'
import FollowedStock from '../FollowedStock/FollowedStock'
import Cookies from 'js-cookie'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate= useNavigate();

  useEffect(()=>{
    const checkUserAuthentication=()=>{
      const cookieToken= Cookies.get('jwtToken')
      if (cookieToken === undefined){
        navigate('/')
      }
    }
    checkUserAuthentication()
  })
  return (
    <div>
      <Navbar/>
      <Sidebar/>
     <TopHoldings/>
   <FollowedStock/>
   
    </div>
  )
}

export default Home
