import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <div className="title-container">
        <div className="title">
            <h1>Health in Your Hands.</h1>
            <p>Take control of your healthcare with ease, explore health blogs, and stay on top of your well-begin, all in one place.</p>
        </div>
        <button id="start-btn">
          <Link href="/login">Get Started</Link>
        </button>  
      </div>  
    </div>
  );
}
