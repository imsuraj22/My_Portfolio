document.addEventListener('DOMContentLoaded', function() {
    var downloadCVBtn = document.getElementById('downloadCV');
    downloadCVBtn.addEventListener('click', function() {
        fetch('Rutuja.pdf')
            .then(response => response.blob())
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = 'Rutuja.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error downloading PDF:', error));
    });
});
