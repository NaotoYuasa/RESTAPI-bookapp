//本の新規登録用のモーダルを開く(フォーム入力された確認画面)
function openModalRegister(){
    // モーダルを表示する
    document.getElementById('myModal').style.display = 'block';

    // フォームデータでモーダルを埋める
    var formData = {
        name: document.getElementById('name').value,
        publisher: document.getElementById('publisher').value,
        author: document.getElementById('author').value,
        page_count: document.getElementById('page_count').value,
        published_date: document.getElementById('published_date').value,
        price: document.getElementById('price').value
    };

    var modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = '';

    // フォームデータを使ってモーダルのコンテンツを構築する
    for (var key in formData) {
        modalContent.innerHTML += '<strong>' + key + ':</strong> ' + formData[key] + '<br>';
    }
}

function closeModalRegister() {
    // Close the modal
    document.getElementById('myModal').style.display = 'none';
}

function submitForm() {
    // You can add your code here to send the JSON data to the server using AJAX
    // For simplicity, let's just log the JSON data to the console
    var formData = {
        name: document.getElementById('name').value,
        publisher: document.getElementById('publisher').value,
        author: document.getElementById('author').value,
        page_count: document.getElementById('page_count').value,
        published_date: document.getElementById('published_date').value.replace(/‐/g, '-'),
        price: document.getElementById('price').value
    };

    console.log(JSON.stringify(formData));

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

             // 登録完了モーダルを表示
            document.getElementById('registerCompleteModal').style.display = 'block';
        }
    };

    xhr.send(jsonData);

    // Close the modal after submitting
    closeModalRegister();
}

function closeRegisterCompleteModal() {
    // Close the register complete modal
    document.getElementById('registerCompleteModal').style.display = 'none';
}