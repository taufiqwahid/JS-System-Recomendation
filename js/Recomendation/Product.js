const stringParameter = window.location.search;
const id = parseInt(stringParameter.split("=")[1]);

const productDetail = document.querySelector(".product-shop");
productDetail.innerHTML = showProductDetail(id);

const productRecomendation = document.querySelector("#product-recomendation");
productRecomendation.innerHTML = showProductRecomendation(id);

function getItemById(id) {
  return allItem.find(function (item) {
    return item.id === id;
  });
}

function showProductRecomendation(id) {
  return recomendation[id].map((product, index) => {
    console.log(`Product Recomendation ${index}  : `, product);
    return `
        <div class="col-lg-3 col-sm-6">
            <div class="product-item">
                <div class="pi-pic">
                    <img src="${product.img}" alt="">
                    <div class="sale">Sale</div>
                    <div class="icon">
                        <i class="icon_heart_alt"></i>
                    </div>
                    <ul>
                        <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                        <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                    </ul>
                </div>
                <div class="pi-text">
                    <div class="catagory-name">Coat</div>
                    <a href  ="#">
                        <h5>${product.title}</h5>
                    </a>
                    <div class="product-price">
                        ${product.price}
                        <span>$35.00</span>
                    </div>
                </div>
            </div>
        </div>`;
  });
}

function showProductDetail(id) {
  return `
  <div class="container">
  <div class="row">
      <div class="col-lg-3">
          <div class="filter-widget">
              <h4 class="fw-title">Categories</h4>
              <ul class="filter-catagories">
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Kids</a></li>
              </ul>
          </div>
          <div class="filter-widget">
              <h4 class="fw-title">Brand</h4>
              <div class="fw-brand-check">
                  <div class="bc-item">
                      <label for="bc-calvin">
                          Calvin Klein
                          <input type="checkbox" id="bc-calvin">
                          <span class="checkmark"></span>
                      </label>
                  </div>
                  <div class="bc-item">
                      <label for="bc-diesel">
                          Diesel
                          <input type="checkbox" id="bc-diesel">
                          <span class="checkmark"></span>
                      </label>
                  </div>
                  <div class="bc-item">
                      <label for="bc-polo">
                          Polo
                          <input type="checkbox" id="bc-polo">
                          <span class="checkmark"></span>
                      </label>
                  </div>
                  <div class="bc-item">
                      <label for="bc-tommy">
                          Tommy Hilfiger
                          <input type="checkbox" id="bc-tommy">
                          <span class="checkmark"></span>
                      </label>
                  </div>
              </div>
          </div>
          
          <div class="filter-widget">
              <h4 class="fw-title">Color</h4>
              <div class="fw-color-choose">
                  <div class="cs-item">
                      <input type="radio" id="cs-black">
                      <label class="cs-black" for="cs-black">Black</label>
                  </div>
                  <div class="cs-item">
                      <input type="radio" id="cs-violet">
                      <label class="cs-violet" for="cs-violet">Violet</label>
                  </div>
                  <div class="cs-item">
                      <input type="radio" id="cs-blue">
                      <label class="cs-blue" for="cs-blue">Blue</label>
                  </div>
                  <div class="cs-item">
                      <input type="radio" id="cs-yellow">
                      <label class="cs-yellow" for="cs-yellow">Yellow</label>
                  </div>
                  <div class="cs-item">
                      <input type="radio" id="cs-red">
                      <label class="cs-red" for="cs-red">Red</label>
                  </div>
                  <div class="cs-item">
                      <input type="radio" id="cs-green">
                      <label class="cs-green" for="cs-green">Green</label>
                  </div>
              </div>
          </div>
          <div class="filter-widget">
              <h4 class="fw-title">Size</h4>
              <div class="fw-size-choose">
                  <div class="sc-item">
                      <input type="radio" id="s-size">
                      <label for="s-size">s</label>
                  </div>
                  <div class="sc-item">
                      <input type="radio" id="m-size">
                      <label for="m-size">m</label>
                  </div>
                  <div class="sc-item">
                      <input type="radio" id="l-size">
                      <label for="l-size">l</label>
                  </div>
                  <div class="sc-item">
                      <input type="radio" id="xs-size">
                      <label for="xs-size">xs</label>
                  </div>
              </div>
          </div>
          <div class="filter-widget">
              <h4 class="fw-title">Tags</h4>
              <div class="fw-tags">
                  <a href="#">Towel</a>
                  <a href="#">Shoes</a>
                  <a href="#">Coat</a>
                  <a href="#">Dresses</a>
                  <a href="#">Trousers</a>
                  <a href="#">Men's hats</a>
                  <a href="#">Backpack</a>
              </div>
          </div>
      </div>
      <div class="col-lg-9">
          <div class="row">
              <div class="col-lg-6">
                  <div class="product-pic-zoom">
                      <img class="product-big-img" src="${
                        getItemById(id).img
                      }" alt="">
                      
                  </div>
                  <div class="product-thumbs">
                      <div class="product-thumbs-track ps-slider owl-carousel">
                          <div class="pt active" data-imgbigurl="img/product-single/product-1.jpg"><img
                                  src="img/product-single/product-1.jpg" alt=""></div>
                          <div class="pt" data-imgbigurl="img/product-single/product-2.jpg"><img
                                  src="img/product-single/product-2.jpg" alt=""></div>
                          <div class="pt" data-imgbigurl="img/product-single/product-3.jpg"><img
                                  src="img/product-single/product-3.jpg" alt=""></div>
                          <div class="pt" data-imgbigurl="img/product-single/product-3.jpg"><img
                                  src="img/product-single/product-3.jpg" alt=""></div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="product-details">
                      <div class="pd-title">
                          <span>oranges</span>
                          <h3>${getItemById(id).title}</h3>
                          <a href="#" class="heart-icon"><i class="icon_heart_alt"></i></a>
                      </div>
                      <div class="pd-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                          <span>(5)</span>
                      </div>
                      <div class="pd-desc">
                          <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
                              sit amet, consectetur adipisicing elit, sed do mod tempor</p>
                          <h4>${getItemById(id).price} <span>${
    getItemById(id).price * 2
  }</span></h4>
                      </div>
                      <div class="pd-color">
                          <h6>Color</h6>
                          <div class="pd-color-choose">
                              <div class="cc-item">
                                  <input type="radio" id="cc-black">
                                  <label for="cc-black"></label>
                              </div>
                              <div class="cc-item">
                                  <input type="radio" id="cc-yellow">
                                  <label for="cc-yellow" class="cc-yellow"></label>
                              </div>
                              <div class="cc-item">
                                  <input type="radio" id="cc-violet">
                                  <label for="cc-violet" class="cc-violet"></label>
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          <div class="product-tab">
              <div class="tab-item">
                  <ul class="nav" role="tablist">
                      <li>
                          <a class="active" data-toggle="tab" href="#tab-1" role="tab">DESCRIPTION</a>
                      </li>
                      <li>
                          <a data-toggle="tab" href="#tab-2" role="tab">SPECIFICATIONS</a>
                      </li>
                      <li>
                          <a data-toggle="tab" href="#tab-3" role="tab">Customer Reviews (02)</a>
                      </li>
                  </ul>
              </div>
              <div class="tab-item-content">
                  <div class="tab-content">
                      <div class="tab-pane fade-in active" id="tab-1" role="tabpanel">
                          <div class="product-content">
                              <div class="row">
                                  <div class="col-lg-7">
                                      <h5>Introduction</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                      <h5>Features</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                  </div>
                                  <div class="col-lg-5">
                                      <img src="${getItemById(id).img}" alt="">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="tab-pane fade" id="tab-2" role="tabpanel">
                          <div class="specification-table">
                              <table>
                                  <tr>
                                      <td class="p-catagory">Customer Rating</td>
                                      <td>
                                          <div class="pd-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star-o"></i>
                                              <span>(5)</span>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Price</td>
                                      <td>
                                          <div class="p-price">${
                                            getItemById(id).price
                                          }</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Add To Cart</td>
                                      <td>
                                          <div class="cart-add">+ add to cart</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Availability</td>
                                      <td>
                                          <div class="p-stock">22 in stock</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Weight</td>
                                      <td>
                                          <div class="p-weight">1,3kg</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Size</td>
                                      <td>
                                          <div class="p-size">Xxl</div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Color</td>
                                      <td><span class="cs-color"></span></td>
                                  </tr>
                                  <tr>
                                      <td class="p-catagory">Sku</td>
                                      <td>
                                          <div class="p-code">00012</div>
                                      </td>
                                  </tr>
                              </table>
                          </div>
                      </div>
                      <div class="tab-pane fade" id="tab-3" role="tabpanel">
                          <div class="customer-review-option">
                              <h4>2 Comments</h4>
                              <div class="comment-option">
                                  <div class="co-item">
                                      <div class="avatar-pic">
                                          <img src="img/product-single/avatar-1.png" alt="">
                                      </div>
                                      <div class="avatar-text">
                                          <div class="at-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star-o"></i>
                                          </div>
                                          <h5>Brandon Kelley <span>27 Aug 2019</span></h5>
                                          <div class="at-reply">Nice !</div>
                                      </div>
                                  </div>
                                  <div class="co-item">
                                      <div class="avatar-pic">
                                          <img src="img/product-single/avatar-2.png" alt="">
                                      </div>
                                      <div class="avatar-text">
                                          <div class="at-rating">
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star"></i>
                                              <i class="fa fa-star-o"></i>
                                          </div>
                                          <h5>Roy Banks <span>27 Aug 2019</span></h5>
                                          <div class="at-reply">Nice !</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="personal-rating">
                                  <h6>Your Ratind</h6>
                                  <div class="rating">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star-o"></i>
                                  </div>
                              </div>
                              <div class="leave-comment">
                                  <h4>Leave A Comment</h4>
                                  <form action="#" class="comment-form">
                                      <div class="row">
                                          <div class="col-lg-6">
                                              <input type="text" placeholder="Name">
                                          </div>
                                          <div class="col-lg-6">
                                              <input type="text" placeholder="Email">
                                          </div>
                                          <div class="col-lg-12">
                                              <textarea placeholder="Messages"></textarea>
                                              <button type="submit" class="site-btn">Send message</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
    `;
}
