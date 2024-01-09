// function getData(){
//     const bookList = document.getElementById('LibraryBooks');

//     fetch('http://127.168.0.100:8000/list')
//     .then((res) => res.json())
//     .then((list) => {
//         list.forEach(book => {
//         const row = bookList.insertRow();
//         row.insertCell().innerText = book.id;
//         row.insertCell().innerText = book.name;
//         row.insertCell().innerText = book.publisher;
//         row.insertCell().innerText = book.author;
//         row.insertCell().innerText = book.page_count;
//         row.insertCell().innerText = book.published_date;
//         row.insertCell().innerText = book.price;
//         row.insertCell().innerHTML = `<a class="btn" href="edit.html?id=${book.id}">変更</a>`;
//         row.insertCell().innerHTML = `<a class="btn" href="delete.html?id=${book.id}">削除</a>`;
//     });
//     })
//     .catch((err) => console.log(err))
// }一旦コメントアウト
function getData() {
    const bookList = document.getElementById('LibraryBooks');

    fetch('http://127.168.0.100:8000/list')
    .then((res) => res.json())
    .then((list) => {
        list.forEach(book => {
        const row = bookList.insertRow();
        row.insertCell().innerText = book.id;
        row.insertCell().innerText = book.name;
        row.insertCell().innerText = book.publisher;
        row.insertCell().innerHTML = `<a class="btn" href="edit.html?id=${book.id}">変更</a>`;
        row.insertCell().innerHTML = `<a class="btn" href="delete.html?id=${book.id}">削除</a>`;
    });
    })
    .catch((err) => console.log(err))
        .then((res) => res.json())
        .then((list) => {
            list.forEach(book => {
                const row = bookList.insertRow();
                row.insertCell().innerText = book.id;
                row.insertCell().innerText = book.name;
                row.insertCell().innerText = book.publisher;
                row.insertCell().innerText = book.author;
                row.insertCell().innerText = book.page_count;
                row.insertCell().innerText = book.published_date;
                row.insertCell().innerText = book.price;

                // 変更ボタン
                row.insertCell().innerHTML = `<a class="btn" href="edit.html?id=${book.id}">変更</a>`;

                // 削除ボタン
                const deleteButton = document.createElement('button');
                const delete_id = document.getElementById('BookId');
                deleteButton.className = 'btn';
                deleteButton.innerText = '削除';
                deleteButton.setAttribute('data-toggle', 'modal');
                deleteButton.setAttribute('data-target', '#exampleModal');
                deleteButton.addEventListener('click', function () {
                    // モーダルに削除対象の書籍情報を渡す処理も追加できます
                });
                row.insertCell().innerHTML = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">削除</button>`; 
            });
        })
        .catch((err) => console.log(err));
}
