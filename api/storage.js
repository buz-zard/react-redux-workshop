const books = [{
  id: 1,
  title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  author: 'Robert C. Martin',
  cover: 'img/clean_code.jpg',
}, {
  id: 2,
  title: 'Test Driven Development: By Example',
  author: 'Kent Beck',
  cover: 'img/tdd.jpg',
}, {
  id: 3,
  title: 'You Don\'t Know JS: Up & Going',
  author: 'Kyle Simpson',
  cover: 'img/ydkjs1.jpg',
  borrowedBy: 1,
}, {
  id: 4,
  title: 'Thinking in Java',
  author: 'Bruce Eckel',
  cover: 'img/think_java.jpg',
}, {
  id: 5,
  title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
  author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, Grady Booch',
  cover: 'img/design_patterns.jpg',
}, {
  id: 6,
  title: 'Code Complete: A Practical Handbook of Software Construction',
  author: 'Steve McConnell',
  cover: 'img/code_complete.jpg',
}, {
  id: 7,
  title: 'BDD in Action: Behavior-driven development for the whole software lifecycle',
  author: 'John Ferguson Smart',
  cover: 'img/bdd.jpg',
}, {
  id: 8,
  title: 'Learning Agile: Understanding Scrum, XP, Lean, and Kanban',
  author: ' Andrew Stellman, Jennifer Greene',
  cover: 'img/agile.jpg',
}];

const employees = [{
  id: 1,
  name: 'Karolis',
  surname: 'Šarapnickis',
}, {
  id: 2,
  name: 'Jonas',
  surname: 'Jonaitis',
}, {
  id: 3,
  name: 'Petrė',
  surname: 'Stefanow',
}];

exports.getBooks = () => books;
exports.getEmployees = () => employees;
exports.doBooking = ({bookId, employeeId}) => books.forEach((book) => {
  if (book.id == bookId) { // eslint-disable-line
    book.borrowedBy = employeeId; // eslint-disable-line
  }
});
exports.doUnbooking = ({bookId}) => books.forEach((book) => {
  if (book.id == bookId) { // eslint-disable-line
    delete book.borrowedBy; // eslint-disable-line
  }
});
