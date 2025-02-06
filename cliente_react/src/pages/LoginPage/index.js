import React, { useContext, useEffect } from "react";

import { AuthContext } from "../../store/contexts";

import "./LoginPage.css"

const LoginPage = () => {
  const Auth = useContext(AuthContext)
  
  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch("/api");
        const body = await response.json();

        console.log("Succesfully called API \"/api\" endpoint", { body })

        return body
      } catch (error) {
        return console.log("Error calling API \"/api\" endpoint")
      }
    };

    callApi()
  }, [])

  const handleClick = () => {
    Auth.setCurrentUser({ email: "gabrieltmm@gmail.com" })
  }

  return (
    <React.Fragment>
      <h1>Olá da LoginPage</h1>
      <button onClick={handleClick}>Fake</button>
    </React.Fragment>
  );
}

export default LoginPage
