window.onload = async function() {
    // 変更: URLからidを抽出してhidden inputのvalueに設定
    var url = new URL(window.location.href);
    var bookId = url.searchParams.get("id");
    document.getElementById('bookId').value = bookId;
};

// 変更: idを取得してモーダルを表示する処理を実行
async function openModalEdit() {
    // Bootstrapモーダルを表示
    $('#exampleModal').modal('show');

    // フォームデータでモーダルを埋める
    var formData = {
        id: $('#bookId').val(),
        name: $('#name').val(),
        publisher: $('#publisher').val(),
        author: $('#author').val(),
        page_count: $('#page_count').val(),
        published_date: $('#published_date').val(),
        price: $('#price').val()
    };

    var modalBody = $('.modal-body');
    modalBody.empty();

    // フォームデータを使ってモーダルのコンテンツを構築する
    for (var key in formData) {
        if(key != 'id'){
            modalBody.append('<p><strong>' + key + ':</strong> ' + formData[key] + '</p>');
        }
    }
}

// Bootstrapモーダルを閉じる処理
async function closeModalEdit() {
    $('#exampleModal').modal('hide');
}

// 変更: idを取得して送信処理を実行
async function submitForm() {
    // JSONデータをサーバーに送信するためのコードを追加することができます
    // 簡単のため、JSONデータをコンソールに表示するだけにしています
    var formData = {
    id: $('#bookId').val(),
    name: $('#name').val(),
    publisher: $('#publisher').val(),
    author: $('#author').val(),
    page_count: $('#page_count').val() !== '' ? $('#page_count').val() : null,
    published_date: $('#published_date').val() !== '' ? $('#published_date').val().replace(/-/g, '') : null,
    price: $('#price').val() !== '' ? $('#price').val() : null
};

    console.log(JSON.stringify(formData));

    // フォームデータをJSONに変換
    var jsonData = JSON.stringify(formData);

    // AJAXを使用してサーバーにデータを送信
    $.ajax({
        type: 'POST',
        url: 'http://127.168.0.100:8000/books_update/' + encodeURIComponent(formData.id),
        contentType: 'application/json;charset=UTF-8',
        data: jsonData,
        success: function (data) {
            // リクエスト成功時の処理
            console.log(data);


            // 変更完了モーダルを表示
            $('#editCompleteModal').modal('show');

        }
    });

    // 送信後にモーダルを閉じる
    closeModalEdit();
}

// Bootstrapモーダルを閉じた際にモーダルの中身をクリアする
$('#exampleModal').on('hidden.bs.modal', function () {
    // モーダルが非表示になったら中身をクリア
    $('.modal-body').empty();
});

// Bootstrapモーダルが非表示になった際に変更完了モーダルの中身をクリアする
$('#editCompleteModal').on('hidden.bs.modal', function () {
    // モーダルが非表示になったら中身をクリア
    $('.modal-body').empty();
});