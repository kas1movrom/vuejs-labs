function loadImages() {
    const container = document.getElementById('images-container');
    
    const imageUrls = [];
    for (let i = 0; i < 5; i++) {
        const url = prompt('Введите ссылку на картинку:');
        imageUrls.push(url);
    }

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onerror = function() {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Can’t load image";
            container.appendChild(errorMessage);
        };
        img.onload = function() {
            container.appendChild(img);
        };
    });
}

loadImages();