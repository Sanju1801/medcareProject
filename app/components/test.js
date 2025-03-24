import React from "react";
import InputComponent from "../components/Input_component";
import Button_component from "../components/Button_component";
import styles from '../styles/test.module.css';
import Link from "next/link";

const SignupComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.fields}>

                <h6>Sign Up</h6>
                <div>
                    <span className={styles.p_tag}>Already a member?</span>
                    <span id={styles.signup_route}>
                        <Link href="/login"> Login here.</Link>
                    </span>
                </div>

                <section className={styles.section}>
                    <InputComponent
                        LabelName="Name"
                        color="rgba(28, 74, 42, 1)"
                        input_type="text"
                        img_url="./name.svg"
                        placeholder_name="Enter Your Name"
                    />
                    <InputComponent
                        LabelName="Email"
                        color="rgba(28, 74, 42, 1)"
                        input_type="email"
                        img_url="./At sign.png"
                        placeholder_name="example@123.com"
                    />
                    <InputComponent
                        LabelName="Password"
                        color="rgba(28, 74, 42, 1)"
                        input_type="password"
                        img_url="./Lock.svg"
                        placeholder_name="Enter Your Password"
                        isPasswordFlag={true}
                    />
                    <Button_component text="Sign Up" color="#1C4A2A" />
                    <Button_component text="Reset" color="#C6B09A" />
                </section>
            </div>
        </div>
    );
};

export default SignupComponent;
