
function getData() {
    const bookList = document.getElementById('LibraryBooks');

    fetch('http://127.168.0.100:8000/list')
        .then((res) => res.json())
        .then((list) => {
            list.sort((a, b) => a.id - b.id);
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
                //削除ボタン
                row.insertCell().innerHTML = `<a class="btn" href="delete.html?id=${book.id}&name=${book.name}">削除</a>`;
                });
            });
        }
        
