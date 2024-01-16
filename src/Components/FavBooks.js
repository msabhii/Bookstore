import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

/**
 * The `FavBooks` function is a React component that renders a button with a heart icon, and toggles
 * the fill of the heart icon when clicked.
 * @returns The function `FavBooks` returns a JSX element.
 */
function FavBooks() {
  const [heartFill, SetheartFill] = useState(false);
  
  const handleClick = () => {
    SetheartFill(!heartFill);
  };
  return (
    <div>
      <div className="text-red-500  hover:text-red-900 mb-8 ">
        <button onClick={handleClick}>
          {heartFill ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}

export default FavBooks;
