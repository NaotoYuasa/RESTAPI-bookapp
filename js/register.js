//本の新規登録用のモーダルを開く(フォーム入力された確認画面)
function openModalRegister(){
    // Display the modal
    document.getElementById('myModal').style.display = 'block';

    // Populate the modal with form data
    var formData = {
        '書籍名': document.getElementById('name').value,
        '出版社': document.getElementById('publisher').value,
        '著者': document.getElementById('author').value,
        'ページ数': document.getElementById('page_count').value,
        '出版日': document.getElementById('published_date').value,
        '価格(税込)': document.getElementById('price').value
    };

    var modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = '';

    for (var key in formData) {
        modalContent.innerHTML += '<strong>' + key + ':</strong> ' + formData[key] + '<br>';
    }
}

function submitForm() {
    // フォームデータを取得
    var formData = {
        name: document.getElementById('name').value,
        publisher: document.getElementById('publisher').value,
        author: document.getElementById('author').value,
        page_count: document.getElementById('page_count').value,
        published_date: document.getElementById('published_date').value,
        price: document.getElementById('price').value
    };

    // フォームデータをJSONに変換
    var jsonData = JSON.stringify(formData);

    // AJAXを使用してサーバーにデータを送信
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.168.0.100:8000/books_regist", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // リクエスト成功時の処理
            console.log(xhr.responseText);
        }
    };

    xhr.send(jsonData);
}