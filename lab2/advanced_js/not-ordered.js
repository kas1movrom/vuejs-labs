/*
https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/2a/18/252f4961ac7ae3515e421929e469d9b3671542ce80e46771937215.jpg
https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/92/1a/3b6b11386a6338dc7f6e27cb012bc13f66c0a606a630e463586509.jpg
https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/40/72/e4b5b053aa2d26248df1cbe8da44eb116747914a5e045316797951.jpg
https://img.championat.com/s/732x488/news/big/s/g/liverpul-real-madrid-mbappe-ne-smog-realizovat-penalti-na-61-j-minute-matcha_1732742827690352962.jpg
https://img.championat.com/c/900x900/news/big/p/f/pszh-liverpul-live_1741211815293022615.jpg

*/

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(url);
    });
}

async function loadImages() {
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

    await Promise.all(promises);
}

loadImages();