/* eslint-disable react/prop-types */
import Star from "./Star";

function Stars({ starsNumber = 5 }) {
  return (
    <div className="flex items-center">
      <Star isFull={starsNumber >= 1} />
      <Star isFull={starsNumber >= 2} />
      <Star isFull={starsNumber >= 3} />
      <Star isFull={starsNumber >= 4} />
      <Star isFull={starsNumber >= 5} />
    </div>
  );
}

export default Stars;
