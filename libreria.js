const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((OggettoResponse) => {
      console.log("response Object", OggettoResponse);
      if (OggettoResponse.ok) {
        return OggettoResponse.json();
      } else {
        throw new Error("errore Reperimento dati");
      }
    })
    .then((Books) => {
      console.log("BooksObj", Books);
      const row = document.getElementById("bookList");

      Books.forEach((currentBook) => {
        const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.classList.add("imgCard");
        img.src = currentBook.img;
        card.appendChild(img);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);
        const Titolo = document.createElement("h5");
        Titolo.classList.add("card-title");
        Titolo.textContent = currentBook.title;
        cardBody.appendChild(Titolo);
        const prezzo = document.createElement("p");
        prezzo.classList.add("card-text");
        prezzo.textContent = `$${currentBook.price}`;
        cardBody.appendChild(prezzo);
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = "Rimuovi";
        button.onclick = () => {
          col.remove();
        };
        cardBody.appendChild(button);

        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((error) => {
      console.log("Error fetching books:", error);
    });
};

fetchBooks();
