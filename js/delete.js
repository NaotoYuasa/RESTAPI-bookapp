window.onload = async function() {
    // 削除: URLからidを抽出してhidden inputのvalueに設定
    const url = new URL(window.location.href);
    const bookId = url.searchParams.get("id");
    const name = url.searchParams.get("name");
    document.getElementById('bookId').value = bookId;
    document.getElementById('name').value = name;
};

// 削除: idを取得して送信処理を実行
async function openModaldelete() {
    // モーダルを表示する
    $('#exampleModal').modal('show');
    
    // フォームデータでモーダルを埋める
    const formData = {
        id: document.getElementById('bookId').value,
        name: document.getElementById('name').value,
        
    };

    var modalBody = $('.modal-body');
    modalBody.empty();
    // const modalContent = document.getElementById('modalContent');
    // modalContent.innerHTML = '';

    for (const key in formData) {
        if(key != 'id'){
            modalBody.append('<p><strong>' + '書籍' + ':</strong> ' + formData[key] + '</p>');
        }
    }
}

async function closeModaldelete() {
    $('#exampleModal').modal('hide');
}

async function deleteForm() {

    let formData = {
        id: document.getElementById('bookId').value,
        name: document.getElementById('name').value,
    };

    console.log(JSON.stringify(formData));

    // フォームデータをJSONに変換
    var jsonData = JSON.stringify(formData);

    // AJAXを使用してサーバーにデータを送信
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://192.168.56.1:8000/books_delete/"+ encodeURIComponent(formData.id), true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     // 登録完了モーダルを表示
    document.getElementById('deleteCompleteModal').style.display = 'block';
        
    xhr.send(jsonData);

    $('#deleteCompleteModal').modal('show');
    
closeModaldelete();
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