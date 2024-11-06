// Function to dynamically add product cards to the page
function addProduct(imageSrc, name, price, productLink) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productAnchor = document.createElement('a');
  productAnchor.href = productLink;
  productAnchor.target = "_blank";

  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = name;

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('product-name');
  nameDiv.textContent = name;

  const priceDiv = document.createElement('div');
  priceDiv.classList.add('product-price');
  priceDiv.textContent = `$${price.toFixed(2)}`;

  productAnchor.appendChild(imgElement);
  productAnchor.appendChild(nameDiv);
  productAnchor.appendChild(priceDiv);

  productDiv.appendChild(productAnchor);
  document.getElementById('product-container').appendChild(productDiv);
}

// addProduct('IMG.JPG', 'Name', Price, 'Link');
addProduct('IMG_1809.JPG', 'Product 1', 20.99, '#');
addProduct('IMG_1810.JPG', 'Product 2', 15.99, '#');
addProduct('IMG_1810.JPG', 'Product 3', 25.99, '#');
addProduct('IMG_1809.JPG', 'Product 4', 19.99, '#');
addProduct('IMG_1810.JPG', 'Product 5', 24.99, '#');
