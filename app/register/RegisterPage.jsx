"use client";

import React from "react";
import { useEffect, useState } from "react";

const RegisterPage = () => {
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
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div class="lg:col-span-2">
                <div class="flex flex-col space-y-4">
                  <div class="md:col-span-6 flex flex-col  justify-between">
                    <label for="full_name">Choose Animal</label>
                    <select
                      id="animal"
                      className="form-select block w-full p-3 focus:bg-white"
                    >
                      <option value="">Select animal type</option>
                      {animalsType.map((animal) => {
                        return (
                          <option value={animal.name} key={animal.name}>
                            {animal.name}
                          </option>
                        );
                      })}
                    </select>
                    {" "}
                  </div>

                  <div class="md:col-span-5">
                    <label for="full_name">Mention type if others</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>

                  <div class="md:flex mb-6 items-center">
                    <div class="md:w-1/3">
                      <label
                        class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
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
                            value="A"
                          />
                          <span class="ml-2">Male</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                          <input
                            type="radio"
                            class="form-radio"
                            name="radioOption"
                            value="B"
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
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="country">Country / region</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-2">
                    <label for="state">State / province</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-1">
                    <label for="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value=""
                    />
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

        <a
          href="https://www.buymeacoffee.com/dgauderman"
          target="_blank"
          class="md:absolute bottom-0 right-0 p-4 float-right"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
            alt="Buy Me A Coffee"
            class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
          />
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
