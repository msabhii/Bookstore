import classNames from "classnames";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function BookCreate({ onSubmit }) {
  const buttonStyle = classNames(
    "bg-red-500 text-white  pl-5 pr-5 w-15 h-15 rounded hover:bg-red-600 "
  );

  const formStyle = classNames("m-10 flex  place-content-center  ");

  const [term, setterm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setterm(event.target.value);
  };

  return (
    <div>
      <form className={formStyle} onSubmit={handleSubmit}>
        <label className="font-bold text-red-500">Find Any Books</label>
        <div className="flex border-2 bg-white rounded-md content-center focus:outline-none active:outline-none ml-3 mr-3 ">
          <input
            className="focus:outline-none active:outline-none rounded-lg ml-4 mr-6 w-40 pl-2  "
            type="text"
            placeholder="Enter Book Name"
            value={term}
            onChange={handleChange}
          />
          <CiSearch
            className="text-red-700 text-xl flex p-2+
        "
          />
        </div>
        <button className={buttonStyle}>Search</button>
      </form>
    </div>
  );
}

export default BookCreate;
