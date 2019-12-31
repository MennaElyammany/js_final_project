//let get_datastorage= JSON.parse( localS//
let arr2 = JSON.parse(localStorage.getItem("arr2"));
let get_datastorage= JSON.parse( localStorage.getItem('allEntries'));
    console.log(arr2);

   br_if: if(arr2 == null){
      break br_if;
   }else{
      var object = arr2.reduce(
         (obj,item) => Object.assign(obj,{
            ["id"]:item.id,
            ["name"]:item.name,
            ["image"]:item.image,
            ["price"]:item.price,
            ["quantity"]:item.quantity

         }),{}
      )
         get_datastorage.push(object)
         console.log(object);
         
   }

let totalit_arr=[]
for(let key in get_datastorage){
console.log(get_datastorage);
let div1= document.createElement('div');
let div2= document.createElement('div');
let div3= document.createElement('div');
let div4= document.createElement('div');
let div5= document.createElement('div');
let name= document.createElement('h5');
let img1= document.createElement('img');
let input1= document.createElement('input');
input1.setAttribute("price",get_datastorage[key].price);
let btn1 = document.createElement('button')
let span1= document.createElement('span');
span1.setAttribute("id",get_datastorage[key].id)
let array_sum=[]
$(input1).change(function(ev){
  
  var dis= ev.target;
  console.log(dis)
  dis.setAttribute("disabled",null);


    
    let ups= ev.target.value;
    let price= ev.target.getAttribute('price')
    let new_price= parseInt(price)
    let pas_span=document.getElementById(get_datastorage[key].id)
     pas_span.innerHTML=Number(ups) * new_price
     totalit_arr.push(pas_span.innerHTML)
     document.getElementById("sum_oftotals").innerHTML=getUnique(totalit_arr);
  
  
 
    console.log (span1.innerHTML);
    
    // sum_total.innerHTML = sum_total.innerHTML == ''?'0':sum_total.innerHTML;
    // console.log(sum_total.innerHTML,totals);
    // sum_total.innerHTML ='';
})

// function get_prod(id){
//   var my_card= JSON.parse(localStorage.getItem("allEntries"))
//   if(my_card){
//     my_card.forEach(product => {
//       if(product.id==id){
//         return product;
//       }
      
      
//     });
//     return false;
//   }
// }


name.innerHTML=get_datastorage[key].name;
img1.setAttribute("src",get_datastorage[key].image);
input1.setAttribute("type","number");
input1.setAttribute("max",get_datastorage[key].quantity)
input1.setAttribute("min",0)

input1.setAttribute("class","col-md-4")
span1.setAttribute("class","col-md-8 spans")
$(span1).css("border-radius","5px solid")
btn1.setAttribute("class","btn btn-outline-danger btn-lg active")
$(btn1).css("width","200px")
$(btn1).css("height","30px")
$(btn1).css("padding","0px")
$(img1).css("width","200px")
btn1.setAttribute("value","btn")
btn1.setAttribute("type","btn")
btn1.innerHTML="Remove"
div1.setAttribute("class","row");
div2.setAttribute("class","col md-3");
div3.setAttribute("class","col md-3");
div4.setAttribute("class","col md-3");
div5.setAttribute("class","col md-3");
div3.appendChild(name);
$(div3).css("margin-top","50px")
div2.appendChild(img1);
div4.appendChild(input1);
div4.appendChild(span1);
div4.setAttribute("class","product")
$(div4).css("margin-top","40px")
div5.appendChild(btn1)
$(div5).css("margin-top","42px")
$(div1).css("display","flex");
div1.appendChild(div2);
div1.appendChild(div3);
div1.appendChild(div4);
div1.appendChild(div5);
let parent = document.getElementById("parent");
let lis = document.createElement("li");
$(lis).css("list-style-type","none")
lis.appendChild(div1)
parent.appendChild(lis);
let refs= document.getElementById("refresh")
$(refs).on("click",function(){
  window.location.href="cart.html"
})
$(btn1).on("click",function(){
  var pprr = document.getElementById(get_datastorage[key].id);
  var totalsss = parseInt(pprr.innerHTML);
  console.log(totalsss);

  //console.log(totOfTotals);
    var totOfTotals = document.getElementById('sum_oftotals').innerHTML;

   totOfTotals = parseInt(totOfTotals) - totalsss;

  document.getElementById('sum_oftotals').innerHTML = totOfTotals;
  var hold= this.parentNode.parentNode.parentNode;
  console.log(hold)
  hold.remove();
  removeItem(get_datastorage[key].id);
 

});
}

function getUnique(arr){
  let uniqueArr = []
  let sums=0;
  for(let i=0;i<arr.length;i++){
    if(uniqueArr.indexOf(arr[i]=== -1)){
      uniqueArr.push(arr[i])
      sums += Number(uniqueArr[i])
    }
  }
  return sums;
}




function removeItem(id) {
    var index = -1;
    var items = get_datastorage|| []; //get the products
    console.log(items);
    
    for (var i = 0; i < items.length; i++) { //loop over the collection
      if (items[i].id === id) { //see if ids match
        items.splice(i, 1); //remove item from array
        break; //exit loop
      }
    }
    localStorage.setItem("allEntries", JSON.stringify(get_datastorage)); //set item back into storage
  }


  function recalculateCart()
  {
    var subtotal = 0;
  //   let pas_span2=document.getElementById(get_datastorage[key].id)
  // var quantity = $(quantityInput).val();
  //   var linePrice = price * quantity;
    /* Sum up row totals */
    $('.product').each(function () {
      //var price = parseInt($(this).children("col-md-12 spans").text());
      
      subtotal +=  Number($(this.children[0]))
      console.log($(this.children[0]))
      
      console.log(subtotal);
      console.log($('.product'));
      console.log($(this.children[0]));
      console.log(attributes[0].$(this.children[0]));
      
      
    });
    
    /* Calculate totals */
  
    var total = subtotal
    let alls= document.getElementById("sum_oftotals")
    alls.innerHTML=total
  } 