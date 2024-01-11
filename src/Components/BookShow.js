function BookShow({ book }) {
  return (
    <div className=" shadow-red-500/50 shadow-md    bg-slate-100">
      <div className=" flext m-2 p-5   ">
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="aa" />
        <div className="bg-red-500 w-48">
          <h1>Title:{book.volumeInfo.title}</h1>
        </div>
        <h4>Author:{book.volumeInfo.authors}</h4>
        <p>Country:{book.accessInfo.country} </p>
        <p>Page No.:{book.volumeInfo.pageCount} </p>
        <p>Categories:{book.volumeInfo.categories} </p>
        <p>Buy this Book: </p>
        <a href={book.saleInfo.buyLink} target="blank">
          Book
        </a>
      </div>
    </div>
  );
}

export default BookShow;
