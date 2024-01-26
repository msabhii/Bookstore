import BookShow from "./BookShow";
import image_404 from "../images/404.gif";

function BookList({ books }) {
  if (!books) {
    return (
      <div className="flex place-content-center">
        <img src={image_404} alt="404" width="" />
      </div>
    );
  } //!
  const BookstoShow = books.map((book) => {
    return (
      <div>
        <BookShow book={book} key={book.id} />
      </div>
    );
  });
  return (
    <div>
      <div className="  ml-2 mr-4 ">{BookstoShow} </div>
    </div>
  );
}
export default BookList;
