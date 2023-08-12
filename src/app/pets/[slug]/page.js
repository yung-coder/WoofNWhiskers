"use client";
import { supabaseClient } from "../../../../supabase/supabase";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import MaleIcon from "@mui/icons-material/Male";
import CallIcon from "@mui/icons-material/Call";
import UpdateIcon from "@mui/icons-material/Update";
import FemaleIcon from "@mui/icons-material/Female";
import { usePathname } from "next/navigation";
const page = () => {
  const pathname = usePathname();
  const [pets, setpets] = useState([]);
  const [modifiedPets, setModifiedPets] = useState([]);
  const [current, setCurrent] = useState(0);

  const getData = async () => {
    let { data } = await supabaseClient.from("animals").select("*");
    setpets(data);
  };

  //   const { slug } = router.query;
  useEffect(() => {
    getData();
  }, []);
  console.log(pets);
  let id = pathname.replace("/pets/", "");
  console.log(id);
  useEffect(() => {
    console.log("modifiedPets");
    if (pets.length !== 0) {
      let petsList = pets.filter((pet) => pet.id == id);
      setModifiedPets(petsList);
      console.log(modifiedPets);
    }
  }, [pets]);
  console.log(modifiedPets);
  const SliderData = [
    {
      image: modifiedPets[0]?.image,
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  function capitalizeFirstLetter(str) {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }
  let animalType = modifiedPets[0]?.type;

  return (
    <div className="petsDetailContainer">
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <div className="PetsModalContainer">
        <div className="PetsInfo">
          <p className="PetsInfoType">
            <span>{capitalizeFirstLetter(animalType)}</span>
          </p>
          <p className="PetsInfoHealth">
            <span>
              {modifiedPets[0]?.gender == "Male" ? (
                <MaleIcon />
              ) : (
                <FemaleIcon />
              )}
              {modifiedPets[0]?.gender}
            </span>{" "}
            <span>
              <UpdateIcon />
              {modifiedPets[0]?.age} years
            </span>{" "}
            <span>x months</span>
          </p>
          <hr />

          <p className="PetsInfoAddress">
            <LocationOnIcon />
            {modifiedPets[0]?.address}
          </p>
          <p className="PetsInfoCountry">
            <LanguageIcon />
            {modifiedPets[0]?.state}({modifiedPets[0]?.country})
          </p>
          <p className="PetsInfoContact">
            <CallIcon />
            xxxxxxx
          </p>
          <hr />
          <p className="PetsInfoBio">About</p>
          <p className="PetsInfoBioData">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
