import axios from "axios";
const searchBook = async (term) => {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyC7RJ9x4MZzqdqzmYGsYEUK9V5TAe9i5S8`;
  try {
    const response = await axios.get(URL);
    // console.log(response.data);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching book:", error);
    throw error;
  }
};

export default searchBook;
