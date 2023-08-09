"use client";
import React, { useState } from "react";
import PetsProfileDisplay from "./PetsProfileDisplay";
import PetsModal from "./PetsModal";
import Link from "next/link";

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
    <div className="petsPage">
      <h1 className="petsAdoptionTitle">Available Pets for Adoption</h1>
      <div className="petsContainer">
        <div className="petsGrid">
          {pets.map((pet, index) => (
            <Link href={index}>
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
