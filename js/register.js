// 本の新規登録用のモーダルを開く(フォーム入力された確認画面)
async function openModalRegister() {
    // Bootstrapモーダルを表示
    $('#exampleModal').modal('show');

    // フォームデータでモーダルを埋める
    var formData = {
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
        modalBody.append('<p><strong>' + key + ':</strong> ' + formData[key] + '</p>');
    }
}

// Bootstrapモーダル
async function closeModalRegister() {
    $('#exampleModal').modal('hide');
    $('#registerCompleteModal').modal('hide');
}

// Bootstrapモーダル
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
        price: $('#price').val() !== '' ? $('#price').val() : null,
        registered_user: 'test_user_01'
    };

    console.log(JSON.stringify(formData));

    // フォームデータをJSONに変換
    var jsonData = JSON.stringify(formData);

    // AJAXを使用してサーバーにデータを送信
    $.ajax({
        type: 'POST',
        url: 'http://192.168.10.49:8000/books_regist',
        contentType: 'application/json;charset=UTF-8',
        data: jsonData,
        success: function (data) {
            // リクエスト成功時の処理
            console.log(data);


            // 登録完了モーダルを表示
            $('#registerCompleteModal').modal('show');

        }
    });

    // 送信後にモーダルを閉じる
    closeModalRegister();
}

// Bootstrapモーダル
async function closeRegisterCompleteModal() {
    $('#registerCompleteModal').modal('hide');
}

// Bootstrapモーダルが非表示になった際にモーダルの中身をクリアする
$('#exampleModal').on('hidden.bs.modal', function () {
    // モーダルが非表示になったら中身をクリア
    $('.modal-body').empty();
});