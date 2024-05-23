import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../constant/UserContext'

const Login = () => {
    const {setUser} = useContext(UserContext)
    const [name,setName] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser(name)
    }
  return (
    <>
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",height:"200px"}}>
            <form onSubmit={handleSubmit} >
                <input style={{height:"4rem",width:"40rem",textAlign:'center',fontSize:"4rem"}} type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
                <br />
                <button type='submit' style={{height:"5rem",textAlign:'center'}}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login