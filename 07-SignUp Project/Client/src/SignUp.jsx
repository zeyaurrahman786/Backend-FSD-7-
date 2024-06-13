/* eslint-disable no-unused-vars */
import React from 'react'

const SignUp = () => {
    return (
        <>
            <h2>Signup</h2>
            <form>
                <label> firstName :- <input type="name"/></label>
                <br />
                <br />
                <label> lastName :- <input type="name"/></label>
                <br />
                <br />
                <label> Email :- <input type="email"/></label>
                <br />
                <br />
                <label> Password :- <input type="password"/></label>
                <br />
                <br />
                <button type="submit">Signup</button>
            </form>
        </>
    )
}

export default SignUp;