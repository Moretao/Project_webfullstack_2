import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../store/contexts";

const CitiesListPage = () => {
  const Auth = useContext(AuthContext)
  
  const [cities, setCities] = useState()
  const [filteredCities, setFilteredCities] = useState()

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const Authorization = "Bearer " + Auth.currentUser.token;

        const response = await fetch("/api/cities", {
          method: "GET",
          headers: {
            Authorization,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })

        const data = await response.json();
        setCities(data.cities);
      } catch (error) {
        console.error(error);
      }
    }

    if (Auth.currentUser) {
      fetchCities();
    }
  }, [])

  return (
    <div className="container">
      <h1>Olá de CitiesListPage</h1>

      <div className="row mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">País</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">População</th>
            </tr>
          </thead>
          <tbody>
            {(filteredCities || cities || []).map((city) => (
              <tr>
                <th scope="row">{city?.id}</th>
                <td>{city?.name}</td>
                <td>{city?.country}</td>
                <td>{city?.latitude}</td>
                <td>{city?.longitude}</td>
                <td>{city?.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CitiesListPage;
