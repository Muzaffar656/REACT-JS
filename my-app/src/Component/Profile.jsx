import React from 'react'
import UserContext from '../constant/UserContext'
import { useContext } from 'react'
const Profile = () => {
  const {user} = useContext(UserContext)
   return (
    <div style={{display:"flex",justifyContent:'center',alignItems:"center",height:"200px"}}>
    <h1>  Profile : {user}</h1>
  </div>
  )
}

export default Profile