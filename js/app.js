let btn = document.getElementById("btn");
let product = document.getElementById("product");

btn.addEventListener("click", () => {

  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {

      product.innerHTML = data.products
        .map((item) => `
          
          <div class="card">

            <img src="${item.images[0]}">

            <h2>${item.title}</h2>

            <h3>${item.rating}</h3>

            <p>${item.price}$</p>

          </div>
        
        `)
        .join("");

    })
    .catch((err) => console.log(err));

});