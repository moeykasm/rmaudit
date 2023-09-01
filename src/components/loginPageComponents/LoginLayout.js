

import { useState } from "react"


export default function LoginPage() {


    const [sectionOn, setSectionOn] = useState(true)

    function loginAttempt() {
        setSectionOn(false)
    }
        
    return (


    
        <div>
    {
        sectionOn 
            &&
        <div className="loginPage">

    <div className="loginPageWrapper">
        {/* <img className="stars" src="stars.png" alt=""> */}

        <div className="loginPage-leftSide leftSideOut">

            <div className="leftSideWrapper">

                <p className="logo">RMAUDIT</p>
                <h1 className="heading">Save the thinking for us</h1>
                <p className="headingUnderText">
                    Have your smart contract graded within seconds!
                </p>


            </div>

            {/* <img src="thinking.png" alt=""> */}

        </div>



        <div className="loginPage-rightSide">

            <div className="signIn">
                <h1 className="signHeader">Sign in</h1>

                <div className="form">

                    <div className="formInput">
                        <p className="formInputHeading">
                            <i className="fa-regular fa-circle-user"></i> Username
                        </p>
                        <input className="usrInp"  type="text" placeholder="Your Username" />
                    </div>

                    <div className="formInput">
                        <p className="formInputHeading">
                            <i className="fa-regular fa-eye-slash"></i> Password
                        </p>
                        <input className="pwdInp" type="password" placeholder="Your Password" />
                    </div>

                </div>

                <div className="submit">
                    <button onClick={loginAttempt}>Sign in <i className="fa-solid fa-arrow-right-long"></i></button>
                    <p>Dont have an account? Register Now <i className="fa-solid fa-user-plus"></i></p>
                </div>
            </div>



        </div>

    </div>

        </div>
    }


        <div className="tempLogin">

        </div>

        </div>
    )
}