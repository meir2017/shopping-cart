// an array with all of our cart items
var cart = [];
var total=0;
var view=false;
var updateCart = function () {
   // TODO: Write this function. Remember this function has nothing to do with display. 
      // It simply is for adding an item to the cart array, no HTML involved - honest ;-)

    total=0;
    cart.forEach(element => {
          if(element!="")
          {
            total+=(element.price*element.amunet)
          }
      });
    $('.total').text(total)
  }

var addItem = function () {    
       // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
      var idItem=0;
      $('.cart-list').empty();
      cart.forEach(element => {
          $('.cart-list').append('<p>'+element.name+' - '+element.price+' ('+element.amunet+')  <button type="button"  data-id="'+idItem+'" class="btn clear-item  ">  <i class="fa fa-minus"style="color:red"></i></button>')
          idItem++
    });
    clearThis()
}

var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
      cart = [];// clear arry
      $('.cart-list').empty();
      updateCart();

}

$('.view-cart').on('click', function () {

      $('.shopping-cart').slideToggle('.show')


});

$('.add-to-cart').on('click', function () {
      // TODO: get the "item" object from the page
      add_ITEMS();
});

$('.clear-cart').on('click', function () {
       clearCart();
});

    // update the cart as soon as the page loads!
    updateCart();

var  clearThis= function clear_item(){
       $('.clear-item').off()
       $('.clear-item').on('click', function () {
        var num=$(this).data().id;// המיקום במערך
        cart[num].amunet--;
        
        if(cart[num].amunet==0)
        cart.splice(num,1)
        updateCart(); //עדכון העגלה
        addItem();
    });
}


var add_ITEMS= function(){
  $('.add-to-cart').off();
  $('.add-to-cart').on('click', function () {
  
      // TODO: get the "item" object from the page
        name =$(this).parent('div').parent('div').data().name;
        price= $(this).parent('div').parent('div').data().price
        item={
        name:name,
        price:price,
        amunet:1
     }
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
        
            addItem();
            updateCart();
    });
  }

