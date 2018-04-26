


var my_pic="";
var price="";
var name="";
$('#myform').submit(function(){
  name=$('#nameProduct').val();
  price=$('#priceProduct').val();
  add();
      $('#nameProduct').val("");
      $('#priceProduct').val("");
      $('#myFile').val("");
      $('#new_product').modal('hide');
})

// path img
$('#myFile').change(function(){ 
    
    var pic=document.getElementById("myFile");
              my_pic = URL.createObjectURL(event.target.files[0]);
              console.log(this.files[0].mozFullPath)
})

//append the new product to html
 function add(){// A variable I'm working on--> name,price,my_pic
     
 var newproduct='<div class="col-md-4">'+
   ' <div class="card-container">'+
      '<div class="card item" item data-name="'+name+'" data-price="'+price+'">'+
        '<div class="pricebox">'+
          '<p class="price"> $'+price+' </p>'+
        ' </div>'+
       ' <div class="buybox">'+
        '  <p class="add-to-cart"> ADD TO CART </p>'+
        '</div>'+
        '<div class="card-inner">'+
         ' <img src='+my_pic+' class="proimage">'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'
  $('.row').append(newproduct);
  
  add_ITEMS(); //call  function from  another file  javascript(script.js)
  
  
}




//     var tmppath = URL.createObjectURL(event.target.files[0]);

// 	$('input[type=file]').change(function () {
//     console.log(this.files[0].mozFullPath);
// });

// $('#i_file').change( function(event) {
//     var tmppath = URL.createObjectURL(event.target.files[0]);
//       console.log(this.files[0].mozFullPath);
//         $("img").fadeIn("fast").attr('src',tmppath);       
//     });
