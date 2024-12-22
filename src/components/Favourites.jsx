import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite, clearFavourites } from "../features/FavouritesSlice";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai"; // Import React Icons

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addFavourite(input));
      setInput("");
    }
  };

  const handleRemove = (index) => {
    dispatch(removeFavourite(index));
  };

  const handleClear = () => {
    dispatch(clearFavourites());
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Favourites List</h1>

        {/* Input Section */}
        <div className="flex items-center space-x-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a favourite item"
            className="flex-grow border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            <AiOutlinePlus className="mr-2" />
            Add
          </button>
        </div>

        {/* Favourites List */}
        <ul className="space-y-4">
          {favourites.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <span className="text-gray-700 font-medium">{item}</span>
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 focus:ring focus:ring-red-300"
              >
                <AiOutlineDelete size={20} />
              </button>
            </li>
          ))}
        </ul>

        {/* Clear Button */}
        {favourites.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleClear}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
