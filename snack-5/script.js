//SNACK-5
// Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(),
// per creare una funzione (getBooks) che a partire da un array di id (ids),
// ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .
const ids = [2, 13, 7, 21, 19];

async function getBooks(ids) {
    const endPoint = `http://localhost:3333/books/`

    const bookPromises = ids.map((id) => {
        return fetch(`${endPoint}${id}`)
            .then((res) => res.json());
    })

    const books = await Promise.all(bookPromises);

    return books;
}

getBooks(ids)
    .then((books) => {
        console.log(books)
    })
// SNACK-6

// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
// Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.
const areThereAvailableBooks = true;
const trovaLibro = books.find