import React from "react";
import styles from "../styles/login_signup.module.css";
import Input_component from "./Input_component";
import Button_component from "./Button_component";
import Link from "next/link";

const LoginComponent = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.fields} ${styles.loginFields}`}>
        <h6>Login</h6>
        <div className={styles.subtilte}>
          <span className={styles.p_tag}>
            Are you a new member? 
          </span>
          <span id={styles.signup_route}>
              <Link href="/signup">Sign up here.</Link>
          </span> 
        </div>
        
        <section className={styles.section}>
          <Input_component
            LabelName="Email"
            color="rgba(28, 74, 42, 1)"
            input_type="email"
            img_url="./At sign.svg"
            placeholder_name="example@123.com"
          />
          <Input_component
            LabelName="Password"
            color="rgba(28, 74, 42, 1)"
            input_type="password"
            img_url="./Lock.svg"
            placeholder_name="Enter Your Password"
            isPasswordFlag = {true} 
          />
          <Button_component text="Login" color="#1C4A2A" />
          <Button_component text="Reset" color="#C6B09A" />
          <a href="#"><p className={styles.forgot}>Forgot Password ?</p></a>
        </section>
      </div>
    </div>
  );
};

export default LoginComponent;
