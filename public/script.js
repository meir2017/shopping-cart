// an array with all of our cart items
var cart = [];
var total=0;
var view=false;
var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
    total=0;
    cart.forEach(element => {
          if(element!="")
          {
            total+=element.price
          }
      });
    $('.total').text(total)
  }
///test


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  $('.cart-list').append('<p>'+item.name+' - '+item.price+' <button type="button"  data-length="'+cart.length+'" class="btn clear-item  ">Clear item</button>')
  clertThis()
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
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
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
var  clertThis= function clear_item(){
  $('.clear-item').off()
  $('.clear-item').on('click', function () {
      var num=$(this).data().length-1;// המיקום במערך
      cart[num]="";
      $(this).closest('p').remove()// מחיקה מהתצוגה
      updateCart(); //הזמנת עיכון העגלה
  });
}
$('.m2').on('click', function () {
debugger
$('.cart-list').empty();
cart.sort()
for(var i=0;i<cart.length;i++)
{
var numq=0;
if(cart[i]!="")
{
    var m_item=cart[i].name;
    while(i<cart.length &&m_item==cart[i].name) 
    {
      numq++;
      i++;
    }
    if(numq==0)
    {
      $('.cart-list').append('<p>'+item.name+' - '+item.price+' <button type="button"  data-length="'+cart.length+'" class="btn clear-item  ">Clear item</button>')
    }
    else{
      $('.cart-list').append('<p>'+item.name+' - '+item.price+'('+numq+') <button type="button"  data-length="'+cart.length+'" class="btn clear-item  ">Clear item</button>')
    }
    i--;
    /// ממציר(כמה)
}

clertThis()

}
});