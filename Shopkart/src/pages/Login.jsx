
import { Navbar } from '../components/Navbar'
import './login.css'

export default function Login(){
    return(
      <>
      <Navbar/>
        <div className="login-page">
          <div className="login-container">

            <div className="login-logo">
              <img src="/images/logo.png" alt="ShopKart" />
            </div>
            <h2>Welcome Back!</h2>
            <p className="login-subtitle">
              Login to continue shopping with ShopKart
            </p>

            <form action="">
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input type="text"
                placeholder="Enter your username" />
              </div>

              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" 
                placeholder="Enter your password" />
              </div>

              <button type="button">
                Login
              </button>
            </form>

            <p className="register-text">
              Don't have an account?
              <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </>
    )
}