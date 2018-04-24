// an array with all of our cart items
var cart = [];

var view=false;
var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  var total=0;
 cart.forEach(element => {
  total+=element.price
});
  $('.total').text(total)
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  $('.cart-list').append('<p>'+item.name+' -  '+item.price+'')
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  $('.cart-list').empty();
  // $('.total').text('0')
  updateCart();

}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  if(view===false)
  {
    $('.shopping-cart').css(  'display', 'block')
    view=true;
  
  }
  else
   {
    $('.shopping-cart').css(  'display', 'none')
    view=false
   }

});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
 // item =$(this).closest('div').prev('div').children('').text();
 name =$(this).parent('div').parent('div').data().name;
 price= $(this).parent('div').parent('div').data().price
 item={
  name:name,
  price:price
 }
 cart.push(item)
  addItem(item);
  updateCart();//?
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
