/**
・削除処理をするjs
 */

function getData(){
    const bookList = document.getElementById('LibraryBooks');

    fetch('http://127.168.0.100:8000/list')
    .then((res) => res.json())
    .then((list) => {
        list.forEach(book => {
        const row = bookList.insertRow();
        row.insertCell().innerText = book.id;
        row.insertCell().innerHTML = `<a href="/bookapp/fc/ad-book/detail?id=${book.id}">${book.name}</a>`;
        row.insertCell().innerText = book.publisher;
        row.insertCell().innerHTML = `<a class="btn" href="edit.html?id=${book.id}">変更</a>`;
        row.insertCell().innerHTML = `<a class="btn" href="delete.html?id=${book.id}">削除</a>`;
    });
    })
    .catch((err) => console.log(err))
}