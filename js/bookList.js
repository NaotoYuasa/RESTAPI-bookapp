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

function getAllData() {
    fetch('http://127.168.0.100:8000/list')
    .then(response => response.json())
    .then(bookData => {
        document.getElementById('bookIdInput').value = bookData.id;
        document.getElementById('bookNameCell').innerHTML = `<input type="text" name="name" value="${bookData.name}">`;
        document.getElementById('publisherCell').innerHTML = `<input type="text" name="publisher" value="${bookData.publisher}">`;
        document.getElementById('authorCell').innerHTML = `<input type="text" name="author" value="${bookData.author}">`;
        document.getElementById('pageCountCell').innerHTML = `<input type="text" name="page_count" value="${bookData.page_count}">`;
        document.getElementById('publishedDateCell').innerHTML = `<input type="text" name="published_date" value="${bookData.published_date}">`;
        document.getElementById('priceCell').innerHTML = `<input type="text" name="price" value="${bookData.price}">`;
    })
    .catch(error => console.error('Error:', error));
}