/* eslint-disable no-unused-vars */
import React from 'react'

const LogIn = () => {
  return (
    <>
        <h2>Login</h2>
            <form>
                <label> Email :- <input type="email"/></label>
                <br />
                <br />
                <label> Password :- <input type="password"/></label>
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
    </>
  )
}

export default LogIn