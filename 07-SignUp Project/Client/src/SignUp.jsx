/* eslint-disable no-unused-vars */
import React from 'react'

const SignUp = () => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SignUp;