import {useNavigate} from "react-router-dom"
import "./LandingPage.css";

function LandingPage(){
    const navigate = useNavigate();
    return(
        <div className="landing-container">
            <div className="content">
                <div>
                    <h1 className="heading1">Welcome to PopX</h1>
                    <p className="description">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing alit,</p>
                </div>

                <div className="buttons">
                    <button className="create-account"
                        onClick={() => navigate("/signup")}
                    >
                    Create Account
                    </button>

                    <button className="login-btn"
                        onClick={() => navigate("/login")}
                    >
                    Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;