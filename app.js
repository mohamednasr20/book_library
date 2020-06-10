// instantiate Book class

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // clear form fields function

  clearInputs = (selectors) => {
    selectors.forEach((selector) => (selector.value = ""));
    this.read.checked = false;
  };

  // error message function

  showError = (el, cl, sec) => {
    el.classList.add(cl);
    setTimeout(() => {
      el.classList.remove(cl);
    }, sec);
  };

  //  render  book

  render = (book) => {
    let readStatue = this.read.checked ? "yes" : "no";

    table.innerHTML += `
    <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${readStatue}</td>
    <td><button class="delete btn">Delete</button></td>
  </tr>
    `;
  };
}

const form = document.querySelector(".form");
const table = document.querySelector(".list");
const inputs = document.querySelectorAll(".input");
const showBtn = document.querySelector(".show-btn");
const valForm = document.querySelector(".val-form");

// add book to the list

const addtbookList = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read");
  const book = new Book(title, author, pages, read);

  if (title === "" || author === "" || pages === "") {
    book.showError(valForm, "active", 2000);
  } else {
    book.render(book);
    book.clearInputs(inputs);
  }
};

//  event listener for form show and hide

showBtn.addEventListener("click", () => {
  form.classList.toggle("active");
});

// event listener for delete book from the list

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});

//  event listener add book to the list

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addtbookList();
});
