let btn = document.getElementById('btn');
let users = document.getElementById('users');

btn.addEventListener('click', () => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      users.innerHTML = data.products.map(
        user => `
          <h3>${user.price}</h3>
          <h3>${user.title}</h3>
          <h3>${user.rating}</h3>
          <h3>${user.reviewerName}</h3>
          <h3>${user.reviewerEmail}</h3>
          <h3>${user.brand}</h3>
          <h3>${user.date}</h3>
          <h3>${user.reviewerEmail}</h3>
          
        `
      ).join('');
    })
    .catch(err => console.error(err));
});