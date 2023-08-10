"use client";
import React, { useState } from "react";
import PetsProfileDisplay from "./PetsProfileDisplay";
import PetsModal from "./PetsModal";
import Link from "next/link";
import Header from "../../../components/Header";
import '../globals.css';

const Pets = () => {
  const [visibility, setVisibility] = useState(0);
  const pets = [
    {
      petType: "dog",
      location: "delhi",
      image:
        "https://media.istockphoto.com/id/541833910/vector/dog-and-cat-icon.jpg?s=2048x2048&w=is&k=20&c=DioFBfQqgEDoZ7cUP9zUqVpFDWOVUAZ6xQFzNl-jjh8=",
    },
    {
      petType: "dog",
      location: "delhi",
      image:
        "https://media.istockphoto.com/id/541833910/vector/dog-and-cat-icon.jpg?s=2048x2048&w=is&k=20&c=DioFBfQqgEDoZ7cUP9zUqVpFDWOVUAZ6xQFzNl-jjh8=",
    },
    {
      petType: "dog",
      location: "delhi",
      image:
        "https://media.istockphoto.com/id/541833910/vector/dog-and-cat-icon.jpg?s=2048x2048&w=is&k=20&c=DioFBfQqgEDoZ7cUP9zUqVpFDWOVUAZ6xQFzNl-jjh8=",
    },
    {
      petType: "dog",
      location: "delhi",
      image:
        "https://media.istockphoto.com/id/541833910/vector/dog-and-cat-icon.jpg?s=2048x2048&w=is&k=20&c=DioFBfQqgEDoZ7cUP9zUqVpFDWOVUAZ6xQFzNl-jjh8=",
    },
    {
      petType: "dog",
      location: "delhi",
      image:
        "https://media.istockphoto.com/id/541833910/vector/dog-and-cat-icon.jpg?s=2048x2048&w=is&k=20&c=DioFBfQqgEDoZ7cUP9zUqVpFDWOVUAZ6xQFzNl-jjh8=",
    },
  ];
  const handleVisibility = () => {
    const visibleValue = visibility == 0 ? 1 : 0;
    setVisibility(visibleValue);
  };
  console.log(visibility);
  return (
    <div className="mainpets">
      <Header title={'Available Pets for Adoption'}/>
      <div className="petsContainer">
        <div className="flex flex-wrap w-screen  p-5 justify-start ">
          {pets.map((pet, index) => (
            <Link href={`/pets/${index.toString()}`}>
              <PetsProfileDisplay
                petType={pet.petType}
                location={pet.location}
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
