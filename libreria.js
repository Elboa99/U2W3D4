const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((OggettoResponse) => {
      console.log("response Object", OggettoResponse);
      if (OggettoResponse.ok) {
        return OggettoResponse.json();
      } else {
        throw newError("errore Reperimento dati");
      }
    })
    .then((BooksObj) => {
      console.log("BooksObj", BooksObj);
    });
};
