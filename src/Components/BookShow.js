import classNames from "classnames";
import FavBooks from "./FavBooks";
import { BiDetail } from "react-icons/bi";
import Noimage from "../images/cover_not_found.jpg";

function BookShow({ book }) {
  const buttonStyle =
    "bg-red-500 text-white  pl-5 pr-5 w-15 h-15 mt-2 rounded hover:bg-red-600";
  const style = classNames("font-xl font-bold text-2xl text-red-400");

  return (
    <div className=" shadow-red-500/50 shadow-md    bg-slate-100">
      <div className=" flex m-2 p-5   ">
        <div>
          {book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt="Book Cover"
              width="145px"
            />
          ) : (
            <span>
              <img src={Noimage} alt="No cover " width="145px" />
            </span>
          )}
        </div>
        <div className="ml-16">
          <div className={style}>
            <h1>
              <span className="text-red-600">Title: </span>
              {book.volumeInfo.title}
            </h1>
          </div>
          <div className="text-red-500 ">
            <h4>
              {" "}
              <span className="text-red-600 font-bold">Author: </span>{" "}
              <span className="underline">{book.volumeInfo.authors}</span>
            </h4>
          </div>
          <div className="text-red-500 ">
            <p>
              {" "}
              <span className="text-red-600 font-bold">Categories: </span>
              {book.volumeInfo.categories}{" "}
            </p>
          </div>
          <div className="text-red-500">
            <p>
              <span className="text-red-600 font-bold">Country: </span>
              {book.accessInfo.country}{" "}
            </p>
          </div>
          <div className="mt-4 text-red-600 font-semibold">
            <p>Buy this Book: </p>
          </div>
          <div>
            {book.saleInfo.buyLink ? (
              <button className={buttonStyle}>
                <a href={book.saleInfo.buyLink} target="blank">
                  Buy Book
                </a>
              </button>
            ) : (
              <p className="text-red-900 font-semibold">No  Purchase Available</p>
            )}
          </div>
          <div className="text-red-600 text-2xl ">
            <div className="ml-60  absolute right-6 mr-8 ">
              <FavBooks />
            </div>
            <div className="ml-60 pr-8 absolute right-6 mr-16 ">
              <button className="hover:text-red-800">
                <a href={book.saleInfo.buyLink} target="blank">
                  <BiDetail />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
