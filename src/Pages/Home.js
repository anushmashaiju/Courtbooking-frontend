
import React, { useEffect } from 'react'
import MainNavBar from '../Common/MainNavBar'
import AxiosInstance from '../Config/AxiosInstance'

function Home() {
  useEffect(()=>{
    getAllCourtsData()
  },[])
  const getAllCourtsData=()=>{
    AxiosInstance.get('/users/getAllCourtsData').then((response)=>{
debugger
    })
    .catch(err=>{

    })
  }
  
  return (
  
    <MainNavBar/>
    
  
  )
}

export default Home
