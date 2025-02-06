import { useEffect } from "react";

import "./LoginPage.css"

const LoginPage = () => {
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

  return (
    <h1>Olá da LoginPage</h1>
  );
}

export default LoginPage
