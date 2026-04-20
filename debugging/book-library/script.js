let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1, book2);
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

const submitForm = document.getElementById("bookForm");
submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book);
  submitForm.reset();

  render();
});

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const tbody = document.querySelector("#display tbody");
  // Clear existing rows
  tbody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    // Create a new row and cells for each book
    const row = tbody.insertRow();
    row.insertCell(0).textContent = book.title;
    row.insertCell(1).textContent = book.author;
    row.insertCell(2).textContent = book.pages;

    const wasReadCell = row.insertCell(3);
    const readBtn = document.createElement("button");
    readBtn.className = "btn btn-success";
    readBtn.textContent = book.check ? "Yes" : "No";

    // Toggle the read status when the button is clicked
    readBtn.addEventListener("click", () => {
      book.check = !book.check;
      render();
    });
    wasReadCell.appendChild(readBtn);

    // Create a delete button for each book
    const deleteCell = row.insertCell(4);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    // Render the updated library when the delete button is clicked
    deleteBtn.addEventListener("click", () => {
      alert(`You've deleted title: ${book.title}`);
      myLibrary.splice(index, 1);
      render();
    });
    deleteCell.appendChild(deleteBtn);
  });
}
