"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../globals.css";
import { getImgProps } from "next/dist/shared/lib/get-img-props";

const RegisterPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [stateList, setStateList] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [inputs, setinputs] = useState({});

  const getinputs = (data) => {
    let { value, name } = data.target;
    if (name === "file-upload") {
      value = handleFileChange(data);
    }
    const input = { [name]: value };
    setinputs({ ...inputs, ...input });
  };

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
      "X-RapidAPI-Key": "a6107d467amsh0dbe21c17dd43c0p164e6djsna12477fa8354",
      "X-RapidAPI-Host": "city-and-state-search-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchStates = async () => {
      const stateOptions = {
        method: "GET",
        url: "https://city-and-state-search-api.p.rapidapi.com/states",
        params: { country_code: countryCode },
        headers: {
          "X-RapidAPI-Key":
            "a6107d467amsh0dbe21c17dd43c0p164e6djsna12477fa8354",
          "X-RapidAPI-Host": "city-and-state-search-api.p.rapidapi.com",
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
      const imageURL = URL.createObjectURL(file);
      return imageURL;
    }
  };

  console.log(inputs, imageURL);

  return (
    <div>
      <div class="w-fit">
        <div>
          <div class="bg-blue-100  rounded-md shadow-lg p-4 px-4  text-gray-700 font-bold md:p-8 mb-6">
            <div class="text-sm w-full ">
              <div class="lg:col-span-2">
                <div class="flex flex-col space-y-4">
                  <div class="md:col-span-6 flex flex-col  justify-between">
                    <label for="full_name">Choose Animal</label>
                    <select
                      id="animal"
                      name="animal"
                      onChange={getinputs}
                      className="form-select block w-full rounded bg-gray-50 border  p-3 focus:bg-white"
                    >
                      <option value="">Select animal type</option>
                      {animalsType.map((animal) => {
                        return (
                          <option
                            value={animal.name}
                            key={animal.name}
                          >
                            {animal.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div class="md:col-span-5">
                    <label for="full_name">Mention type if others</label>
                    <input
                      type="text"
                      name="type"
                      id="type"
                      onChange={getinputs}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div class="md:flex mb-6 items-center">
                    <div class="md:w-1/3">
                      <label
                        class="block  md:text-left mb-3 md:mb-0 pr-4"
                        for="my-radio"
                      >
                        Gender
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <div class="mt-2">
                        <label class="inline-flex items-center">
                          <input
                            type="radio"
                            class="form-radio text-indigo-600"
                            name="radioOption"
                            onChange={getinputs}
                            value="Male"
                          />
                          <span class="ml-2">Male</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            class="form-radio"
                            name="radioOption"
                            onChange={getinputs}
                            value="Female"
                          />
                          <span class="ml-2">Female</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">Disease, if any</label>
                    <input
                      type="text"
                      name="disease"
                      id="disease"
                      onChange={getinputs}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      onChange={getinputs}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  <div className="flex space-x-5">
                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={getinputs}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        onChange={getinputs}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="flex space-x-5">
                    <div class="md:col-span-2">
                      <label for="country">Country / region</label>
                      <select
                        id="country"
                        name="country"
                        onChange={handleCountryChange}
                        onChangeCapture={getinputs}
                        value={selectedCountry}
                        className="form-select block w-full rounded bg-gray-50 border  p-3 focus:bg-white"
                      >
                        <option value="">Select a Country</option>
                        {countries.map((country) => {
                          return (
                            <option
                              onChange={getinputs}
                              value={country.name}
                              key={country.name}
                            >
                              {country.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">State / province</label>
                      <select
                        id="state"
                        name="state"
                        onChange={getinputs}
                        className="form-select block w-full rounded bg-gray-50 border  p-3 focus:bg-white "
                      >
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
                    </div>
                  </div>

                  <div className="flex space-x-5">
                    <div class="md:col-span-1">
                      <label for="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        onChange={getinputs}
                        id="zipcode"
                        class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-fit bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-1">
                      <label for="zipcode">Age</label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        onChange={getinputs}
                        class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm">
                      Image
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm ">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium   focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span class="">Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                              value={imageURL}
                              onChange={getinputs}
                            />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
