import React from "react";

const PetsModal = ({ visibility }) => {
  console.log(visibility);
  return (
    <div className="PetsModalContainer" style={{ opacity: `${visibility}` }}>
      <div className="PetsModalInfo">
        <p>
          Pet Type: <span>Dog</span>
        </p>
        <p>
          Country: <span>India</span>
        </p>
        <p>
          City: <span>Delhi</span>
        </p>
        <p>
          Address: <span>abc building, xyz state, 110044</span>
        </p>
        <p>
          Contact number: <span>xxxxxxx</span>
        </p>
        <p>
          Pet breed: <span>xxxxxxx</span>
        </p>
        <p>
          Pet age: <span>xxxxxxx</span>
        </p>
      </div>
      <div className="PetsModalImage">
        <img
          src="https://media.istockphoto.com/id/541833910/vector/dog-and-cat-icon.jpg?s=2048x2048&w=is&k=20&c=DioFBfQqgEDoZ7cUP9zUqVpFDWOVUAZ6xQFzNl-jjh8="
          alt=""
        />
      </div>
    </div>
  );
};

export default PetsModal;
