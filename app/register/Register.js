"use client";
import { API_KEY, API_HOST } from ".env";
import { useEffect, useState } from "react";
import axios from "axios";
const Register = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [stateList, setStateList] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const animalsType = [
    {
      name: "dog",
    },
    {
      name: "cat",
    },
    {
      name: "parrot",
    },
  ];

  const options = {
    method: "GET",
    url: "https://city-and-state-search-api.p.rapidapi.com/countries",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  useEffect(() => {
    const fetchStates = async () => {
      const stateOptions = {
        method: "GET",
        url: "https://city-and-state-search-api.p.rapidapi.com/states",
        params: { country_code: countryCode },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      };
      try {
        const response = await axios.request(stateOptions);
        const data = response.data;
        setStateList(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (countryCode !== "") {
      fetchStates();
    }
  }, [countryCode]);

  useEffect(async () => {
    try {
      const response = await axios.request(options);

      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountryValue = event.target.value;
    setSelectedCountry(selectedCountryValue);
    countries.forEach((country) => {
      if (country.name === selectedCountryValue) {
        setCountryCode(country.iso2);
      }
    });
  };

  const handleStateChange = (event) => {
    const selectedStateValue = event.target.value;
    setSelectedState(selectedStateValue);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the selected image
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
  };

  return (
    <div className="formContainer">
      <h1 className="formTitle">Register your animal</h1>
      <form className="registerForm">
        <label for="cars">Choose your animal type</label>
        <select id="animal" style={{ marginLeft: "250px" }}>
          <option value="">Select animal type</option>
          {animalsType.map((animal) => {
            return (
              <option value={animal.name} key={animal.name}>
                {animal.name}
              </option>
            );
          })}
        </select>{" "}
        <br />
        <label for="fname">Mention type, if selected others</label>
        <input
          type="text"
          placeholder="Mention type"
          style={{ marginLeft: "150px" }}
        />
        <br />
        <label for="fname">Age of Animal</label>
        <input
          type="number"
          placeholder="Years"
          min="0"
          style={{ marginLeft: "400px" }}
        />{" "}
        <input type="number" placeholder="Months" min="0" />
        <br />
        <label>Select Gender</label>
        <input
          type="radio"
          id="male"
          value="male"
          style={{ marginLeft: "400px" }}
        />
        <label for="html">Male</label>
        <input type="radio" id="female" value="female" />
        <label for="css">Female</label>
        <br />
        <label for="cars">Country</label>
        <select
          id="country"
          onChange={handleCountryChange}
          value={selectedCountry}
          style={{ marginLeft: "480px" }}
        >
          <option value="">Select a Country</option>
          {countries.map((country) => {
            return (
              <option value={country.name} key={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
        <br />
        <label for="cars">State</label>
        <select id="country" style={{ marginLeft: "520px" }}>
          <option value="">Select a state</option>
          {stateList.map((state) => {
            return (
              <option
                value={state.name}
                key={state.name}
                onChange={handleStateChange}
              >
                {state.name}
              </option>
            );
          })}
        </select>
        <br />
        <label for="fname">Pincode</label>
        <input type="text" style={{ marginLeft: "480px" }} />
        <br />
        <label for="fname">Disease, if any</label>
        <input
          type="text"
          placeholder="Mention disease"
          style={{ marginLeft: "380px" }}
        />
        <br />
        <label for="fname">Upload animal images</label>
        <input
          type="file"
          id="myFile"
          name="filename"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          style={{ marginLeft: "280px" }}
        />
        {imageURL && <img src={imageURL} alt="image" />}
      </form>
    </div>
  );
};

export default Register;
