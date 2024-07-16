let book_data = [];

let table = new DataTable("#book-data-table", {
  responsive: true,
  data: book_data,
  select: true,
});
// columns: [{ data: "title", data: "author", data: "isbn" }],
document.getElementById("submit-button").addEventListener("click", addData);

//a row is selected
table.on("click", "tr", function () {
  //update table
  let data = table.row(this).data();
  // console.log(data);
  table.row(this).remove().draw();
  //search list and remove data
  let i = 0;
  for (i = 0; i < book_data.length; i++) {
    if (
      book_data[i].title == data[0] &&
      book_data[i].author == data[1] &&
      book_data[i].isbn == data[2]
    ) {
      break;
    }
    //write local file
  }
  //shift one cell left
  for (i = i + 1; i < book_data.length; i++) {
    book_data[i - 1] = book_data[i];
  }
  book_data.pop();
});

function addData() {
  let data = {
    title: document.getElementById("title-input").value,
    author: document.getElementById("author-input").value,
    isbn: document.getElementById("isbn-input").value,
  };
  //search if exists or
  //add book
  book_data.push(data);
  // console.log(book_data);
  table.row.add([data.title, data.author, data.isbn]).draw();
  // console.log(table.rows().data());
  //
  //write local file
}
