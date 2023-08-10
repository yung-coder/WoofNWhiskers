import Ping from "../../../public/assets/dog.jpg";

const PetsProfileDisplay = ({ petType, location, image, handleFuction }) => {
  return (
    <div class="m-4">
      <div class="max-w-md w-full backdrop-blur-2xl shadow-lg rounded-xl p-4 shadow-black">
        <div class="flex flex-col">
          <div class="">
            <div class="relative h-62 w-full mb-3">
              <img
                src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                alt="Just a flower"
                class="   w-64 h-64  rounded-full"
              />
            </div>
          </div>
          <div className="flex p-2 text-white justify-around">
            <div className="flex space-x-2 justify-center">
              <img
                src="https://www.pngall.com/wp-content/uploads/10/Pet-Silhouette.png"
                className="w-7 h-7"
              />
              <h1 className="text-xl">{petType}</h1>
            </div>
            <div className="flex space-x-2 justify-center"> 
              <img
                src="https://www.freeiconspng.com/uploads/pin-png-25.png"
                alt="Images Download Free Pin"
                className="w-7 h-7"
              />
              <h1 className="text-xl">{location}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsProfileDisplay;
