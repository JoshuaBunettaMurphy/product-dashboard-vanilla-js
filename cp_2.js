const apiUrl = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() {
    fetch(apiUrl)
        .then((res) => res.json())
        .then((products) => {
            console.log('Using . then():');
            products.forEach((product) => {
                console.log(product.fields.name);
            });
        })
        .catch((error) => {
            console.error('Error fetching products (then):', error);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerhtml = ''; 

    product.slice(0, 5).forEach((product) => {
        const { name, price, image } = product.fields;
        const imgUrl = image[0].apiUrl;
        const card = document.createElement('div');
        card.className = 'prodcut-card';
        card.innerHTML = `
            <img src="${imgUrl}" alt="${name}" />
            <h3>${name}</h3>
            <p>$${(price / 100).toFixed(2)}</p>
        `;
        container.appendChild(card);
    });
}

function handleError(error) {
    console.error('Error: ${error.message}');

fetchProductsThen();
fetchProductsAsync();
}
