let productViews = new WeakMap();

let cartItems = new WeakSet();

// Increment Product View
function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    productViews.set(productId, productViews.get(productId) + 1);
    console.log(`Product ID ${productId} is viewed for the ${productViews.get(productId)} time`);
  } else {
    productViews.set(productId, 1);
    console.log(`Product ID ${productId} is viewed for the first time`);
  }
};

// Add To Cart
function addToCart(productId) {
  if (cartItems.has(productId)) {
    console.log("Product already in cart");
  } 
  else {
    cartItems.add(productId);
    console.log("Product added to cart");
  }
};
