function goBack() {
    history.back();
    console.log('Before reload');
    location.reload(); // ロード
    console.log('After reload');
}