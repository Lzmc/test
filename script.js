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
addProduct('IMG_1809.JPG', 'Classic Black Tee', 19.99, '#');
addProduct('IMG_1810.JPG', 'Graphic Print T-Shirt', 21.99, '#');
addProduct('IMG_1809.JPG', 'Vintage Style Tee', 18.49, '#');
addProduct('IMG_1810.JPG', 'Colorful Stripes T-Shirt', 20.99, '#');
addProduct('IMG_1809.JPG', 'Funny Saying Tee', 22.49, '#');
addProduct('IMG_1810.JPG', 'Summer Vibes T-Shirt', 19.99, '#');
addProduct('IMG_1809.JPG', 'Cool Cats Tee', 20.49, '#');
addProduct('IMG_1810.JPG', 'Retro Graphic Tee', 23.99, '#');
addProduct('IMG_1809.JPG', 'Minimalist Design T-Shirt', 18.99, '#');
addProduct('IMG_1810.JPG', 'Adventure Awaits Tee', 21.49, '#');
addProduct('IMG_1809.JPG', 'Bold Statement T-Shirt', 19.99, '#');
addProduct('IMG_1810.JPG', 'Chill Out T-Shirt', 20.99, '#');
addProduct('IMG_1809.JPG', 'Nature Lover Tee', 22.99, '#');
addProduct('IMG_1810.JPG', 'Classic Fit T-Shirt', 15.99, '#');
addProduct('IMG_1809.JPG', 'Art Inspired Tee', 24.99, '#');
addProduct('IMG_1810.JPG', 'Geek Chic T-Shirt', 18.49, '#');
addProduct('IMG_1809.JPG', 'Everyday Comfort Tee', 20.49, '#');
addProduct('IMG_1810.JPG', 'Vibrant Colors T-Shirt', 19.99, '#');
addProduct('IMG_1809.JPG', 'Cool Weather Tee', 22.49, '#');
addProduct('IMG_1810.JPG', 'Peace & Love T-Shirt', 21.99, '#');
addProduct('IMG_1809.JPG', 'Stylish Casual Tee', 19.49, '#');
addProduct('IMG_1810.JPG', 'Bold Graphics T-Shirt', 20.99, '#');
addProduct('IMG_1809.JPG', 'Life is Good Tee', 18.99, '#');
addProduct('IMG_1810.JPG', 'Wild and Free T-Shirt', 22.99, '#');
addProduct('IMG_1809.JPG', 'Classic White Tee', 15.99, '#');
addProduct('IMG_1810.JPG', 'Festival Ready T-Shirt', 24.49, '#');
addProduct('IMG_1809.JPG', 'Cool Colors Tee', 19.99, '#');
addProduct('IMG_1810.JPG', 'Bold Lines T-Shirt', 21.49, '#');
addProduct('IMG_1809.JPG', 'Dream Big Tee', 20.99, '#');
addProduct('IMG_1810.JPG', 'Casual Friday T-Shirt', 18.49, '#');
addProduct('IMG_1809.JPG', 'Artistic Design Tee', 22.49, '#');
addProduct('IMG_1810.JPG', 'Everyday Essentials T-Shirt', 19.99, '#');
addProduct('IMG_1809.JPG', 'Street Style Tee', 20.49, '#');
addProduct('IMG_1810.JPG', 'Cool Print T-Shirt', 21.99, '#');
addProduct('IMG_1809.JPG', 'Classic Logo Tee', 19.99, '#');
