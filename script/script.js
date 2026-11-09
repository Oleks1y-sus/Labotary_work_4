/* // Завдання 1 та 2
let book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,
  
  bookInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`);
  },


  markAsRead() {
    this.isRead = true;
  }
};

book.bookInfo();

book.isRead = !book.isRead;
console.log("Після зміни значення isRead:");
book.bookInfo();

book.markAsRead();
console.log("Після використання markAsRead():");
book.bookInfo();


let library = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false },
  { title: "1984", author: "George Orwell", year: 1949, isRead: true }
];

function displayLibrary() {
  library.forEach(book => {
    console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`);
  });
}

displayLibrary();

library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false });

console.log("Після додавання 'The Great Gatsby':");
displayLibrary();


library.sort((a, b) => a.year - b.year);
console.log("Відсортовані книги за роком видання:", library);

let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги:", unreadBooks);

let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien");
console.log("Книга Толкіна:", tolkienBook);

function calculateAverageYear(booksArray) {
  if (booksArray.length === 0) return 0;
  let totalYears = booksArray.reduce((sum, book) => sum + book.year, 0);
  return totalYears / booksArray.length;
}
console.log(`Середній рік видання всіх книг у library: ${Math.round(calculateAverageYear(library))}`);
function addBookToLibrary() {
  let title = prompt("Введіть назву книги:");
  let author = prompt("Введіть автора книги:");
  let year = +prompt("Введіть рік видання книги:");
  let isRead = confirm("Чи прочитана книга?");

  if (title && author && !isNaN(year)) {
    library.push({ title, author, year, isRead });
    console.log("\n--- Завдання 4: Оновлений список після додавання користувачем ---");
    displayLibrary();
  } else {
    alert("Введено некоректні дані!");
  }
}


// addBookToLibrary();
*/

let place = {
  title: "Ейфелева вежа",
  country: "Франція",
  city: "Париж",
  budget: 800,
  isVisited: false,

  placeInfo() {
    const visitedStatus = this.isVisited ? "Так" : "Ні";
    console.log(`Назва: ${this.title}, Країна: ${this.country}, Місто: ${this.city}, Бюджет: ${this.budget}€, Відвідано: ${visitedStatus}`);
  },

  markAsVisited() {
    this.isVisited = true;
  }
};

place.placeInfo();

place.isVisited = !place.isVisited;
console.log("Після зміни статусу відвідування:");
place.placeInfo();

place.markAsVisited();
console.log("Після виклику markAsVisited():");
place.placeInfo();

let travels = [
  { title: "Колізей", country: "Італія", city: "Рим", budget: 600, isVisited: true },
  { title: "Саґрада Фамілія", country: "Іспанія", city: "Барселона", budget: 500, isVisited: false },
  { title: "Статуя Свободи", country: "США", city: "Нью-Йорк", budget: 1500, isVisited: false }
];

function displayTravels() {
  travels.forEach(item => {
    const status = item.isVisited ? "Так" : "Ні";
    console.log(`Назва: ${item.title}, Країна: ${item.country}, Місто: ${item.city}, Бюджет: ${item.budget}€, Відвідано: ${status}`);
  });
}

console.log("Початковий список подорожей ");
displayTravels();


travels.push({ title: "Біг-Бен", country: "Велика Британія", city: "Лондон", budget: 900, isVisited: false });

console.log("Список подорожей після додавання нового елемента ");
displayTravels();


travels.sort((a, b) => a.budget - b.budget);
console.log("Відсортовані подорожі за бюджетом:", travels);

let unvisitedPlaces = travels.filter(item => !item.isVisited);
console.log("Невідвідані місця:", unvisitedPlaces);

let italyTrip = travels.find(item => item.country === "Італія");
console.log("Знайдена подорож в Італію:", italyTrip);

function calculateAverageBudget(array) {
  if (array.length === 0) return 0;
  let totalBudget = array.reduce((sum, item) => sum + item.budget, 0);
  return totalBudget / array.length;
}

console.log(`Середній бюджет подорожей: ${calculateAverageBudget(travels)}€`);

function addTravelToList() {
  let title = prompt("Введіть назву місця, яке хочете відвідати:");
  let country = prompt("Введіть країну:");
  let city = prompt("Введіть місто:");
  let budget = +prompt("Введіть орієнтовний бюджет (€):");
  let isVisited = confirm("Чи вже відвідано це місце?");

  // Додавання нового об'єкта до масиву
  travels.push({ title, country, city, budget, isVisited });

  console.log("Оновлений список після введення користувача ");
  displayTravels();
}

addTravelToList();
