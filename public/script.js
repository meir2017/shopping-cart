


var userCart="userCart";
var saveUserCartLocalStorage = function () {
  localStorage.setItem(userCart, JSON.stringify(cart));
}

var getUserCartLocalStorage = function () {
  return JSON.parse(localStorage.getItem(userCart) || '[]');
}




// an array with all of our cart items
var cart = getUserCartLocalStorage(); 

var updateCart = function () {//הצגה של המוצרים שקניתי דף
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.

        var total=0;
        var idItem=0;
        $('.cart-list').empty();
        cart.forEach(element => {
            $('.cart-list').append('<p>'+element.name+' - '+element.price+' ('+element.amunet+')  <button type="button"  data-id="'+idItem+'" class="btn clear-item  ">  <i class="fa fa-minus"style="color:red"></i></button>')
            idItem++;
            total+=(element.price*element.amunet)
      });
      $('.total').text(total)
      

}


var addItem = function (item) {// הוספה למערך בלבד
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)

  var isNew=true;
  
  for(var i=0;i<cart.length;i++)
   {
     if( cart[i].name!= undefined && cart[i].name===item.name)
     {
       cart[i].amunet++;
       isNew=false
       break;
     }  
   }
   if(isNew)
   cart.push(item);
   saveUserCartLocalStorage();

}

var clearCart = function () { // TODO: Write a function that clears the cart ;-)
  cart = [];// clear arry
  $('.cart-list').empty();
  updateCart();
  saveUserCartLocalStorage();
}

$('.view-cart').on('click', function () { // TODO: hide/show the shopping cart!
    $('.shopping-cart').slideToggle('.show')
});

$('#userCart').on('click', '.add-to-cart',function () {
  // TODO: get the "item" object from the page
  var name =$(this).parent('div').parent('div').data().name;
      var price= $(this).parent('div').parent('div').data().price
      item={
      name:name,
      price:price,
      amunet:1
    }
 
    addItem(item);
    updateCart();
});

$('#userCart').on('click', '.clear-cart',function ()  {
    clearCart();
});

// update the cart as soon as the page loads!
updateCart();

$('#userCart').on('click','.clear-item', function () {
    var num=$(this).data().id;// המיקום במערך
    cart[num].amunet--;
    
    if(cart[num].amunet==0)
    cart.splice(num,1)
    updateCart(); //עדכון העגלה
    saveUserCartLocalStorage();
});