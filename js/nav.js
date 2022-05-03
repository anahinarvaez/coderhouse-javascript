const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
        <img src="../img/CHARLY LOVERS.png" class="brand-logo" alt="" />
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="buscar producto"
            />
            <button class="search-btn">Buscar</button>
          </div>
          <a href="#"><img src="img/user.png" alt=""></a>
          <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">vestidos</a></li>
        <li class="link-item"><a href="#" class="link">pantalones</a></li>
        <li class="link-item"><a href="#" class="link">remeras</a></li>
        <li class="link-item"><a href="#" class="link">accessorios</a></li>
        

      </ul>
    `;
};

createNav();
