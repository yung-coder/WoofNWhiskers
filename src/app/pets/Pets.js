"use client";
import React, { useEffect, useState } from "react";
import PetsProfileDisplay from "./PetsProfileDisplay";
import PetsModal from "./PetsModal";
import Link from "next/link";
import Header from "../../../components/Header";
import "../globals.css";
import { supabaseClient } from "../../../supabase/supabase";

const Pets = () => {
  const [visibility, setVisibility] = useState(0);
  const [states, setStates] = useState([]);
  const [animalType, setAnimalType] = useState(null);
  const [Country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [countryList, setCountryList] = useState([]);
  // const [zipcode, setZipcode] = useState(null);
  // const [zipcodeList, setZipcodeList] = useState([]);
  const [pets, setpets] = useState([]);
  const [originalPets, setOriginalPets] = useState([]);
  const getData = async () => {
    let { data } = await supabaseClient.from("animals").select("*");
    setOriginalPets(data);
    setpets(data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(pets);

  const handleVisibility = () => {
    const visibleValue = visibility == 0 ? 1 : 0;
    setVisibility(visibleValue);
  };
  const handleAnimalChange = (e) => {
    const selectedAnimalType = e.target.value;
    setAnimalType(selectedAnimalType);
  };
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
  };
  // const handleZipcodeChange = (e) => {
  //   const selectedZipCode = e.target.value;
  //   setZipcode(selectedZipCode);
  // };

  useEffect(() => {
    originalPets?.map((pet) => states.push(pet.state));
    let set = new Set(states);
    setStates([...set]);
  }, []);
  console.log(states);
  useEffect(() => {
    originalPets?.map((pet) => countryList.push(pet.country));
    let set = new Set(countryList);
    setCountryList([...set]);
  }, []);
  console.log(countryList);
  // useEffect(() => {
  //   originalPets?.map((pet) => zipcodeList.push(pet.zipcode));
  //   let set = new Set(zipcodeList);
  //   setZipcodeList([...set]);
  // }, []);

  // console.log(zipcodeList);
  useEffect(() => {
    let modifiedPets = originalPets.filter((pet) => pet.country == Country);
    setpets(modifiedPets);
  }, [Country]);
  useEffect(() => {
    let modifiedPets = originalPets.filter((pet) => pet.type == animalType);
    setpets(modifiedPets);
  }, [animalType]);
  useEffect(() => {
    let modifiedPets = originalPets.filter((pet) => pet.state == state);
    setpets(modifiedPets);
  }, [state]);
  // useEffect(() => {
  //   let modifiedPets = originalPets.filter((pet) => pet.zipcode == zipcode);
  //   setpets(modifiedPets);
  // }, [zipcode]);

  return (
    <div className="mainpets">
      <Header title={"Available Pets for Adoption"} />
      <div>
        <select id="filter" onChange={handleAnimalChange}>
          <option value="all">Select Animal Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>{" "}
        <select id="filter" onChange={handleCountryChange}>
          <option value="all">Select Country</option>
          {countryList.map((country) => {
            return <option value={country}>{country}</option>;
          })}
        </select>{" "}
        <select id="filter" onChange={handleStateChange}>
          <option value="all">Select State</option>
          {states.map((state) => {
            return <option value={state}>{state}</option>;
          })}
        </select>{" "}
        {/* <select id="filter">
          <option value="all">Select Zipcode</option>
          {zipcodeList.map((zipcode) => {
            return <option value={zipcode}>{zipcode}</option>;
          })}
        </select>{" "} */}
      </div>
      <div className="petsContainer">
        <div className="flex flex-wrap w-screen  p-5 justify-start ">
          {pets.map((pet, index) => (
            <Link href={`/pets/${pet.id}`}>
              <PetsProfileDisplay
                petType={pet.type}
                location={pet.city}
                image={pet.image}
                key={index}
                handleFuction={handleVisibility}
              />
            </Link>
          ))}
        </div>
      </div>
      <PetsModal visibility={visibility} />
    </div>
  );
};

export default Pets;
