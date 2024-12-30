function fetchdata() {
    fetch("http://localhost:3000/casual-men")
        .then((res) => res.json())
        .then((data) => {
            let store = data.map((e) => `
            <a href="card.html?id=${e.id}&title=${encodeURIComponent(e.title)}&image=${encodeURIComponent(e.image)}&founder=${encodeURIComponent(e.founder)}&category=${encodeURIComponent(e.category)}&price=${encodeURIComponent(e.price)}" class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4" style="text-decoration: none;">
              <div class="position-relative shadow-sm">
                <img src="${e.image}" alt="${e.title}" class="card-img-top">
                <div class="card-body text-center text-dark">
                  <span class="text-center">Engineered Bounce</span>
                  <h5 class="card-title text-truncate fw-bold">${e.title}</h5>
                  <p class="fw-bold">${e.price}</p>
                  <div class="container col-12 justify-content-around">
                    <div class="row">
                        <button class="btn btn-dark col-6">Buy Now</button>
                        <button class="btn btn-dark col-6"  onclick="addcart(${e.id}, '${e.title}', '${e.image}', '${e.price}')">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          `);

          document.getElementById("container").innerHTML = store.join("");
        })
        .catch((err) => console.log(err));
}


function addcart(id, title, image, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = {id, title, image, price};
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}



fetchdata();