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
    document.getElementById('myModal').style.display = 'block';
    
    // フォームデータでモーダルを埋める
    const formData = {
        id: document.getElementById('bookId').value,
        name: document.getElementById('name').value,
        
    };

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = '';

    for (const key in formData) {
        modalContent.innerHTML += '<strong>' + key + ':</strong> ' + formData[key] + '<br>';
    }
}

async function closeModaldelete() {
    
    document.getElementById('myModal').style.display = 'none';
}

async function deletetForm() {

    let formData = {
        id: document.getElementById('bookId').value,
        name: document.getElementById('name').value,
    };

    console.log(JSON.stringify(formData));

    // フォームデータをJSONに変換
    var jsonData = JSON.stringify(formData);

    // AJAXを使用してサーバーにデータを送信
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.168.0.100:8000/books_delete/"+ encodeURIComponent(formData.id), true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     // 登録完了モーダルを表示
    document.getElementById('deleteCompleteModal').style.display = 'block';
        
    xhr.send(jsonData);

    closeModaldelete();
}

async function deleteCompleteModal(){
    
    document.getElementById('deleteCompleteModal').style.display = 'none';
}