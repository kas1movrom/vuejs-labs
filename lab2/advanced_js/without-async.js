function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(url);
    });
}

function loadImages() {
    const container = document.getElementById('images-container');
    const imageUrls = [];

    for (let i = 0; i < 5; i++) {
        const url = prompt('Введите ссылку на картинку:');
        imageUrls.push(url);
    }

    const promises = imageUrls.map(url =>
        loadImage(url)
            .then(img => {
                container.appendChild(img);
            })
            .catch(url => {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = `Can’t load image: ${url}`;
                container.appendChild(errorMessage);
            })
    );

    Promise.all(promises)
        .then(() => {
            console.log("Все изображения обработаны.");
        })
        .catch(() => {
            console.log("Не все изображения были загружены.");
        });
}

loadImages();