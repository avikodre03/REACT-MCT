
import './loginPage.css'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginPage = ({ email, password, checkInput, setemail, setpassword, setcheckInput }) => {

    const loginPage = () => {
        if (email !== "" && password !== "" && checkInput !== false) {
            localStorage.setItem("login", true)
            navigate("/home")
            setemail("")
            setpassword("")
            setcheckInput(false)
        } else {
            alert("Please enter valid Email and Password ")
        }
    }

    const navigate = useNavigate();
    // useEffect(() => {
    //     let login = localStorage.getItem("login");
    //     if (login) {
    //         navigate("/")
    //     }
    // })

    return (
        <>

            <div className='LoginPage'>
                <div className="LoginPageLeft">
                    <div className="heading">
                        <h1>Welcome back to<br /> pretty Login</h1>
                    </div>
                    <p>it's great to have you back! </p>
                    <label htmlFor="Name">EMAIL</label>
                    <input type="email" id='inputs' value={email} onChange={(e) => {
                        setemail(e.target.value)
                    }} />
                    <label htmlFor="Name">PASSWORD</label>
                    <input type="password" id='inputs' value={password} onChange={(e) => {
                        setpassword(e.target.value)
                    }} />

                    <div className="checkboxContainer">
                        <div className="checkbox">
                            <input type="checkbox" name="" id="checkbox" onClick={(e) => {
                                setcheckInput(true)
                            }} />
                            <p>Remember me?</p>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    <div className="buttonContainer">
                        <button id='login' onClick={() => {
                            loginPage()
                        }}>LOGIN</button>
                        <button id='create'>CREATE ACCOUNT</button>
                    </div>
                    <div className="loginWith">
                        <span>or login with</span>
                        <div className="link">
                            <p>Facebook</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
                <div className="LoginPageRight"></div>
            </div>
        </>
    )
}

export default LoginPage