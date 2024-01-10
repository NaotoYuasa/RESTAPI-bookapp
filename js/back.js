document.getElementById('backButton').addEventListener('click', goBack);

        function goBack() {
            history.back();
            location.reload();
        }