'use client'
import Link from "next/link";

export default function Signup() {
    return (
        <div className="login-page">
            <div className="form-container">
                <h2>Sign Up</h2>
                <p className="subtitle">Already a memeber? <Link href="/login" className='special-link'>Login.</Link></p>
                
                <form>
                    <div className="input-group">
                        <label className="input-label">Name</label>
                        <input 
                            type="text" 
                            className="input-field" 
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Email</label>
                        <input 
                            type="email" 
                            className="input-field" 
                            placeholder="@Enter your email address"
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <input 
                            type="password" 
                            className="input-field" 
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <div className="form-footer">
                        <button type="submit" className="submit-btn">
                            <Link href="/login">Submit</Link>
                        </button>
                        <button type="submit" className="reset-btn">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}