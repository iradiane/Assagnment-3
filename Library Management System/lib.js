var library = [
  {
      title: 'The Digital Fortress',
      author: 'Dan Brown',
      availability: true,
      holder: ''
  },
  {
      title: 'The Davinci Code',
      author: 'Dan Brown',
      availability: false,
      holder: 'John Smith'
  },
  {
      title: 'Long Eagle',
      author: 'Anonymous',
      availability: true,
      holder: ''
  },
  {
      title: 'Atomic Habits',
      author: 'James Clair',
      availability: false,
      holder: 'Diane'
  },
  {
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      availability: true,
      holder: ''
  },
];

// function addBooks(book) {
//     console.log(library.length);
//     library.push(book);
//     console.log(library.length);
// };

// function listOfAvailableBooks() {
//     var available = [];
//     library.forEach(book => {
//         if (book.availability === true) {
//             available.push(book);
//         }
//     });
//     console.log(available);
// }

// const listAllAvailableBooks = () => {
//     var available = library.filter(book => book.availability === true);
//     console.log(available);
// }

// function  listAvailableBooks()  {
//     var available = [];
//     for (var i = 0; i < library.length; i++) {
//         if (library[i].availability === true) {
//             available.push(library[i]);
//         }
//     }
//     console.log(available);
// };

// listAllAvailableBooks();

function borrow(bookName, holder) { 
  // Check whether the book is available 
  // var availableBook = library.find(book => book.title === bookName && book.availability === true);
  // console.log(availableBook);
  // if (!availableBook) {
  //     console.log('That book is not available');
  //     return;
  // }

  var theAvailableBook = {};
  library.forEach(book => {
      if (book.title === bookName && book.availability === true) {
          theAvailableBook = book;
          book.availability = false;
          book.holder = holder;
          console.log("The book is available for borrowing!");
          return;
      }
  });

  console.log(theAvailableBook);

  if (theAvailableBook.availability || theAvailableBook.availability === false) {
      console.log(library);
  } else {
      console.log('That book is not available');
  }
}

function  returnBook (){

}

borrow('Atomic Habits', 'John Smith')