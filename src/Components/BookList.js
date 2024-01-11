import BookShow from "./BookShow";

function BookList({ books }) {
  const BookstoShow = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return (
    <div className="">
      <div className="  ml-2 mr-4 ">{BookstoShow}</div>
    </div>
  );
}
export default BookList;
