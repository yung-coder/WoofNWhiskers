import petIcon from "../../public/assets/petIcon.png";
import locationIcon from "../../public/assets/locationIcon.png";

const PetsProfileDisplay = ({ petType, location, image, handleFuction }) => {
  return (
    <div className="petsProfileContainer" onClick={handleFuction}>
      <div className="overlay">
        <div onClick={handleFuction}>
          <img src={image} alt="petProfile" className="petProfileImage" />
        </div>
        <div className="petsProfileContainerContent" onClick={handleFuction}>
          <div className="petIconDiv" onClick={handleFuction}>
            <img
              src="https://www.pngall.com/wp-content/uploads/10/Pet-Silhouette.png"
              alt="petIcon"
              className="petIcon "
            />
            <p className="petTypeName">{petType}</p>
          </div>
          <div className="locationIconDiv" onClick={handleFuction}>
            <img
              src="https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png"
              alt="locationIcon"
              className="locationIcon "
            />
            <p className="locationName">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsProfileDisplay;
