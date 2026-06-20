let btn = document.getElementById("btn");
let product = document.getElementById("product");

btn.addEventListener("click", () => {

  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {

      product.innerHTML = data.products
        .map((prodacts) => `
          
          <div class="card">

            <img src="${prodacts.images[0]}">

            <h2>${prodacts.title}</h2>

            <h3>${prodacts.rating}</h3>

            <p>${prodacts.price}$</p>

          </div>
        
        `)
        .join("");

    })
    .catch((err) => console.log(err));

});