/**
・削除処理をするjs
 */

function openDeleteModal(bookId) {
    // モーダルを表示
    $('#deleteModal').modal('show');

    // モーダル内の削除ボタンにクリックイベントを設定
    $('#confirmDelete').on('click', function() {
        // モーダルが確認されたら、削除処理を実行
        deleteBook(bookId);

        // モーダルを非表示にする
        $('#deleteModal').modal('hide');

        // イベントリスナーを削除
        $('#confirmDelete').off('click');
    });
}

// 削除ボタンがクリックされたときにopenDeleteModalを呼び出す
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.dataset.bookId;
            openDeleteModal(bookId);
        });
    });
});

function deleteBook(bookId) {
    fetch("http://127.168.0.100:8000/list/books_delete/${Id}", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // 行のIDをリクエストボディに含める
    })
}
