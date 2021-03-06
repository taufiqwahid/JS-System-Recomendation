const productShop = document.querySelector("#all-product-item");
productShop.innerHTML = showProductShop();

function showProductShop() {
  return allItem.map((item) => {
    return `
            <div class="col-lg-4 col-sm-6">
                <div class="product-item">
                    <div class="pi-pic">
                        <img src="${item.img}" alt="">
                        <div class="sale pp-sale">Sale</div>
                        <div class="icon">
                            <i class="icon_heart_alt"></i>
                        </div>
                        <ul>
                            <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                            <li class="quick-view"><a href="../../product.html?id=${
                              item.id
                            }">+ Quick View</a></li>
                            <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                        </ul>
                    </div>
                    <div class="pi-text">
                        <div class="catagory-name">Towel</div>
                        <a href="../../product.html?id=${item.id}">
                            <h5>${item.title}</h5>
                        </a>
                        <div class="product-price">
                            $${item.price}
                            <span>$${item.price * 2}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
}
