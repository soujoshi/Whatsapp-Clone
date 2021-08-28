import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.cbronline.com/wp-content/uploads/2017/01/WhatsApp-chat-app.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <button type="submit" onClick={signIn}>
                    Sign In with Google
                </button>

            </div>
        </div>
    );
}

export default Login;