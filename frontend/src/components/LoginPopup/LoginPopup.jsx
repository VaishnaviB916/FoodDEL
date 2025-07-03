import React ,{useState} from 'react'
import './LoginPopup.css'

const LoginPopup = () => {

  const [currState,setCurrState]= useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick ={()=>setShwL}src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
