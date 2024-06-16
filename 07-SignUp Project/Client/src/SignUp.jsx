// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  let [input, SetInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  function fun1(e) {
    let { name, value } = e.target
    SetInput({ ...input, [name]: value })
  }

  async function done(e) {
    e.preventDefault();
    console.log('click');
    let res = await axios.post('http://localhost:5000/signup', input)
    console.log(res, "hehehehehe");
  }

  return (
    <div>
      <form onSubmit={done}>
        <div id="form">
          <div className="from2">
            <input className="forminput" name='firstName' value={input.firstName} onChange={fun1} type="text" placeholder="First name " />
            <input className="forminput" name='lastName' value={input.lastName} onChange={fun1} type="text" placeholder="last name " />
            <input className="forminput" name='email' value={input.email} onChange={fun1} type="Email" placeholder="Email" />
            <input className="forminput" name='passWord' value={input.passWord} onChange={fun1} type="password" placeholder="PassWord " />
            <button className="formbtn" >Create Account</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup;