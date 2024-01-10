window.addEventListener('pageshow', () => {
    if(performance.getEntriesByType("navigation")[0].type === 'back_forward'){
        alert('ブラウザの「戻る」または「進む」でページが表示されました。ページをリロードします。');
        location.reload();
    }
});