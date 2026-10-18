import './Login.css'

export function Login(){

  return(
    <div className="container">
      <h1>Login Form</h1>

        <div className='mini-title'>
         <span className='mini-title1'>Login</span> <span className='mini-title2'>Signup</span>
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <span className='forgot'>Forgot password?</span>

        <button>Login</button>

          <div className='member-container'>
        <span>Not a member?</span> <span className='member-signup'>Signup now</span>
          </div>
    </div>
  )
}