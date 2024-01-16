import BookShow from "./BookShow";

function BookList({ books }) {
  const BookstoShow = books.map((book) => {
    return (
      <div>
        <BookShow book={book} key={book.id} />
      </div>
    );
  });
  return (
    <div>
      <div className="  ml-2 mr-4 ">{BookstoShow}</div>
    </div>
  );
}
export default BookList;
