'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/login_signup.module.css";
import Input_component from "./Input_component";
import Button_component from "./Button_component";
import Link from "next/link";

const URL = "http://localhost:3001/login";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.stopPropagation();
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      const response = await fetch(URL, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if(response.ok){
        router.push('/appointments');
      }
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      router.push("/appointments");

    } catch (err) {
      setError(err.message);
    }
  };

  const isResetDisabled = !email && !password;

  return (
    <div className={styles.container} onClick={() => setError("")}>
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
        
        {error && <p className={styles.error}>{error}</p>} 
        
        <section className={styles.section}>
          <Input_component
            LabelName="Email"
            color="rgba(28, 74, 42, 1)"
            input_type="email"
            img_url="./At sign.svg"
            value={email}
            change={setEmail}
            placeholder_name="example@123.com"
          />
          <Input_component
            LabelName="Password"
            color="rgba(28, 74, 42, 1)"
            input_type="password"
            value={password}
            img_url="./Lock.svg"
            change={setPassword}
            placeholder_name="Enter Your Password"
            isPasswordFlag = {true} 
          />
          <Button_component text="Login" color="#1C4A2A" onClick={handleLogin}/>
          <Button_component
            text="Reset"
            color="#C6B09A"
            disabled={isResetDisabled}
            onClick={() => {
              setEmail("");
              setPassword("");
              setError(""); 
            }}
          />
          <a href="#"><p className={styles.forgot}>Forgot Password ?</p></a>
        </section>
      </div>
    </div>
  );
};

export default LoginComponent;
