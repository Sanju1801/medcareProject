'use client'
import Link from 'next/link'

export default function Login() {
    return (
        <div className="login-page">
            <div className="form-container">
                <h2>Login</h2>
                <p className="subtitle">Are you a new memeber? <Link href="/signup" className='special-link'>Sign up here.</Link></p>
                
                <form>
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
                        <button type="submit" className="submit-btn">Login</button>
                        <button type="submit" className="reset-btn">Reset</button>
                        <Link href="/signup" className='special-link'>Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}