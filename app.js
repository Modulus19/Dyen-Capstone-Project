console.log('Hi mom!!');

let firstProduct;
let otherProducts;
const productImage = document.querySelector('#productImage');
const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const productDesc = document.querySelector('#productDesc');
const productContainer = document.querySelector('#productContainer');


function fetchProducts() {
  productContainer.innerHTML = '';

  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
      otherProducts = data;
      firstProduct = data[0];

      productImage.src = firstProduct?.image;
      productName.innerHTML = firstProduct?.title;
      productDesc.innerHTML = firstProduct?.description;
      productPrice.innerHTML = `₦ ${firstProduct?.price}`;

      otherProducts.forEach(
        (product) =>
          (productContainer.innerHTML += `<li>
            <div class='title'>
              <h2>${product?.title}</h2>
            </div>
            <p>₦ ${product?.price}</p>
            <button>Add to cart</button>
        </li>`)
      );
    });
}

fetchProducts();