script:
$(document).ready(function () {




let books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        description: "Harry Potter discovers that he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
        year: 1997,
        genre: "Fantasy",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083.jpg",
        link: "https://www.goodreads.com/book/show/72193.Harry_Potter_and_the_Philosopher_s_Stone"
    },
    {
        title: "Never Lie",
        author: "Freida McFadden",
        description: "A psychological thriller about a couple who discover dark secrets in an isolated house.",
        year: 2022,
        genre: "Thriller",
        cover: "https://covers.openlibrary.org/b/isbn/9781464221361-M.jpg",
        link: "https://www.goodreads.com/search?q=Never+Lie+Freida+McFadden"
    },
    {
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        description: "A moving story about two Afghan women, their friendship, love, sacrifice, and survival.",
        year: 2007,
        genre: "Historical Fiction",
        cover: "https://covers.openlibrary.org/b/isbn/9781594489501-M.jpg",
        link: "https://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns"
    },
    {
        title: "The Teacher",
        author: "Freida McFadden",
        description: "A psychological thriller filled with secrets, suspense, and unexpected twists.",
        year: 2024,
        genre: "Thriller",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1693401496i/195967140.jpg",
        link: "https://www.goodreads.com/search?q=The+Teacher+Freida+McFadden"
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        description: "A young girl discovers the power of books and stories during World War II in Nazi Germany.",
        year: 2005,
        genre: "Historical Fiction",
        cover: "https://covers.openlibrary.org/b/isbn/9780375842207-M.jpg",
        link: "https://www.goodreads.com/book/show/19063.The_Book_Thief"
    }
];



    displayBooks(books);



    $("#searchBtn").click(function () {

        searchBooks();

    });



    $("#searchInput").keypress(function (event) {

        if (event.which === 13) {

            searchBooks();

        }

    });


    function searchBooks() {

        let query =
            $("#searchInput")
            .val()
            .toLowerCase()
            .trim();



        if (query === "") {

            displayBooks(books);

            return;
        }



        let results = books.filter(function (book) {

            return (

                book.title
                    .toLowerCase()
                    .includes(query)

                ||

                book.author
                    .toLowerCase()
                    .includes(query)

                ||

                book.genre
                    .toLowerCase()
                    .includes(query)

            );

        });


        displayBooks(results);

    }



    function displayBooks(bookList) {

        $("#bookResults").html("");


        if (bookList.length === 0) {

            $("#message").text(
                "No books found."
            );

            return;
        }


        $("#message").text(
            "Showing " +
            bookList.length +
            " book(s)"
        );


        $.each(
            bookList,
            function (index, book) {


                let bookHTML = `

                    <div class="book">

                        <img
                            class="book-cover"
                            src="${book.cover}"
                            alt="${book.title}"
                        >


                        <h2>
                            ${book.title}
                        </h2>


                        <h3>
                            ✍️ ${book.author}
                        </h3>


                        <p>
                            <strong>Genre:</strong>
                            ${book.genre}
                        </p>


                        <p>
                            <strong>Published:</strong>
                            ${book.year}
                        </p>


                        <p>
                            ${book.description}
                        </p>


                        <a
                            class="read-btn"
                            href="${book.link}"
                            target="_blank"
                        >
                            View Book
                        </a>

                    </div>

                `;


                $("#bookResults")
                    .append(bookHTML);

            }
        );

    }

});
