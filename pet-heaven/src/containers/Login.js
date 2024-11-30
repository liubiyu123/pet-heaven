import React from 'react'

const Login = () => {

  const submit = () => {
    alert("Login successful");
  }

  return (
    <div className='login-container'>
      <div className='login-input'>
        <h1>Login</h1>
        <div class="form-floating mb-3">
          <input type="username" class="form-control" id="floatingInput" placeholder="Username" />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <div>
        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={submit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login