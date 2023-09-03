import { useState } from "react"



import HorzLines from "../HorzLines"
import VertLines from "../VertLines"


export default function TestLogin() {


    const [incorrect, setIncorrect] = useState(false)
 
    return (
        <>

        <div className="loginPageWrapper">

        <div className="logoWrapper logoFixed">
                <a href="/">
                    <div className="logo">
                        <span className="material-symbols-rounded">
                            vpn_key
                        </span>
                        <p>RMAUDIT</p>
                    </div>
                </a>
            </div>


            <HorzLines/>
            <VertLines/>

            <div className="colorBars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
               
            </div>

            <div className="circleOverLay">
            </div>
            <div className="innerCircleOverlay"></div>

           

            <div className="loginBoxWrapper-shadow">
                <div className="loginBoxWrapper">
                    <p className="heading">Sign in to your account</p>

                    {
                        incorrect
                        &&
                        <p className="incorrect">Username or password incorrect, please try again</p>

                    }

                    <form>
                
                        <div className="formDivider">
                            <label>Username</label>
                            <div className="dblInput">

                            <input type="text" />

                            <div className="symbolWrapper">
                            <span className="material-symbols-rounded">account_circle</span>
                            </div>

                            </div>
                        </div>

                        <div className="formDivider">
                            <div className="doubleTag">
                                <label>Password</label> 
                                <p className="signUpHyper">Forgot your password?</p>
                            </div>

                            <div className="dblInput">

                                <input type="password" />

                                <div className="symbolWrapper">
                                    <span className="material-symbols-rounded">lock</span>
                                </div>

                            </div>
                        </div>

                    </form>

                    <p className="signUpText">Don't have an account? <span className="signUpHyper">Sign up</span></p>
                    

                    <a className="menuBarHref" href={`/dashboard`}>
                    <button
                    className="continueBtn"
                    >
                        Continue
                        <div className="spanWrapper">
                            <span className="material-symbols-rounded">
                                trending_flat
                            </span>
                        </div>
                    
                    </button>
                    </a>

                    {/* <p><span>Terms of Service</span> - <span>Privacy Policy</span></p> */}

                </div>
            </div>


            <div className="boxTagWrapper">

                <div className="boxWrapper">
                    <div className="box">
                    <span className="material-symbols-rounded">
                        fingerprint
                    </span>
                    <p>Secure & Safe Auditing</p>
                    </div>
                </div>


                <div className="boxWrapper">
                    <div className="box">
                        <span className="material-symbols-rounded">
                            encrypted
                        </span>
                        <p>Solidity Shielding</p>
                    </div>
                </div>

                <div className="boxWrapper">
                    <div className="box">
                    <span className="material-symbols-rounded">
                        conversion_path
                    </span>
                    <p>Full Contract Analysis</p>
                    </div>
                </div>

                <div className="boxWrapper">

                    <div className="box">
                    <span className="material-symbols-rounded">
                        atr
                    </span>
                    <p>Bulletproof Smart Contracts</p>
                    </div>
                </div>

            </div>

        </div>

        </>
    )
}