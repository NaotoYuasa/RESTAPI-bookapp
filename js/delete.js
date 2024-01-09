document.addEventListener('DOMContentLoaded', function () {

    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', function () {
            // クリックされたボタンからdata-book-id属性を取得
            const bookId = this.dataset.bookId;

            setBookIdToDelete(bookId);

            const modalDeleteButton = document.getElementById('deleteButton');
            modalDeleteButton.dataset.bookId = bookId;

            modalDeleteButton.addEventListener('click', function () {

        // APIに対して削除リクエストを送信
        fetch(`http://127.168.0.100:8000/books_delete/${bookIdToDelete}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // レスポンスをコンソールに出力
            })
            .catch(error => console.error('Error:', error));
        });
    });
});
        // ボタンがクリックされたときの処理
        function setBookIdToDelete(BookId) {
            currentBookIdToDelete = bookId;
        }
});

// function openDeleteModal(delete_id){
//                 // 削除ボタン処理
//                 const deleteButton = document.createElement('button');
//                 deleteButton.className = 'btn';
//                 deleteButton.innerText = '削除';
//                 deleteButton.setAttribute('data-toggle', 'modal');
//                 deleteButton.setAttribute('data-target', '#exampleModal');


//                 deleteButton.addEventListener('click', function () {

//                         // モーダルに削除対象の書籍情報を表示
//                         const modalTitle = document.querySelector('.modal-title');
//                         const modalBody = document.querySelector('.modal-body');
            
//                         // モーダルに書籍情報を表示
//                         modalTitle.innerText = '削除ページ';
            
//                         // 削除ボタンに付加したidを取得
//                         const bookIdToDelete = deleteButton.dataset.bookId;
            
//                         // モーダル内の削除ボタンにidをセット
//                         const modalDeleteButton = document.querySelector('.modal-footer .btn-primary');
//                         modalDeleteButton.dataset.bookIdToDelete = bookIdToDelete;
//                     });
            
//                     row.insertCell().appendChild(deleteButton)
//                 