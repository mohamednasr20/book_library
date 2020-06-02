function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const arr = [];
const form = document.querySelector(".form");
const table = document.querySelector(".list");
const inputs = document.querySelectorAll(".input");
const showBtn = document.querySelector(".show-btn");
const valForm = document.querySelector(".val-form");

const showForm = () => {
  form.classList.toggle("active");
};

function addtbookList() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read");
  let book = new Book(title, author, pages, read);
  arr.push(book);
}

const checkVal = () => {
  inputArr = [];
  inputs.forEach((input) => {
    if (input.value !== "") {
      inputArr.push(input.value);
    }
  });
  if (inputArr.length === 3) {
    render();
  } else {
    valForm.classList.add("active");
    setTimeout(() => {
      valForm.classList.remove("active");
    }, 1000);
  }
};

const render = () => {
  let lastBook = arr[arr.length - 1];
  let readStatue = read.checked ? "yes" : "no";

  table.innerHTML += `
  <tr>
  <td>${lastBook.title}</td>
  <td>${lastBook.author}</td>
  <td>${lastBook.pages}</td>
  <td>${readStatue}</td>
  <td><button class="delete btn">Delete</button></td>
</tr>
  `;
};

const clearInputs = () => {
  inputs.forEach((input) => (input.value = ""));
  read.checked = false;
};

const removeBook = (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
};

showBtn.addEventListener("click", showForm);

table.addEventListener("click", removeBook);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addtbookList();
  checkVal();
  clearInputs();
});
