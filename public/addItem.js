

var STORAGEnewProduct="STORAGEnewProduct";

var saveToNewProductLocalStorage = function () {
  localStorage.setItem(STORAGEnewProduct, JSON.stringify(newProduct));
}

var getNewProductLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGEnewProduct) || '[]');
}


var newProduct=getNewProductLocalStorage();
var getPic="";
var getPrice="";
var getName="";
var updateCarAllproduct=function(){
  newProduct.forEach(element => {
    createProduct(element);
  });
}

$('#myform').submit(function(e){
  e.preventDefault();
  getName=$('#nameProduct').val();
  getPrice=$('#priceProduct').val();
  setArryProduct();
      $('#nameProduct').val("");
      $('#priceProduct').val("");
      $('#myFile').val("");
      $('#new_product').modal('hide');

})

var imgisValid=function(){
  
}




// path img
$('#myFile').change(function(){ 
    
    var pic=document.getElementById("myFile");
     getPic = URL.createObjectURL(event.target.files[0]);
              console.log(this.files[0].mozFullPath)
})

//append the new product to html
 var createProduct=function (item){// A variable I'm working on--> name,price,my_pic
 var newProductAppend='<div class="col-md-4">'+
   ' <div class="card-container">'+
      '<div class="card item" item data-name="'+item.nameItem+'" data-price="'+item.priceItem+'">'+
        '<div class="pricebox">'+
          '<p class="price"> $'+item.priceItem+' </p>'+
        ' </div>'+
       ' <div class="buybox">'+
        '  <p class="add-to-cart"> ADD TO CART </p>'+
        '</div>'+
        '<div class="card-inner">'+
         ' <img src='+item.picItem+' class="proimage">'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'
  $('.row').append(newProductAppend);
    
}

var setArryProduct= function(){
  var item={
    nameItem :getName,
    priceItem:getPrice,
    picItem:getPic
  }
  createProduct(item);
  newProduct.push(item)
  saveToNewProductLocalStorage();
}

updateCarAllproduct();

//     var tmppath = URL.createObjectURL(event.target.files[0]);

// 	$('input[type=file]').change(function () {
//     console.log(this.files[0].mozFullPath);
// });

// $('#i_file').change( function(event) {
//     var tmppath = URL.createObjectURL(event.target.files[0]);
//       console.log(this.files[0].mozFullPath);
//         $("img").fadeIn("fast").attr('src',tmppath);       
//     });
