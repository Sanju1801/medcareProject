import React from 'react'
import SignupComponent from '../components/SignupComponent'
import styles from '../styles/login_signup.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <SignupComponent/>
    </div>
  )
}

export default Login
