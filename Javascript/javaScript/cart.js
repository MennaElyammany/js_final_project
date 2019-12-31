
let sum=0;
let tsum;
let arr2 = JSON.parse(localStorage.getItem("arr2"));
if( localStorage.getItem('allEntries')!=""){
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
       
   }

let totalit_arr=[]
for(let key in get_datastorage){
console.log(get_datastorage);
let Div0=document.createElement('div');
Div0.setAttribute('id',get_datastorage[key].id);
let Div= document.createElement('div');
Div.setAttribute('class',get_datastorage[key].id)
let Div2= document.createElement('div');
Div2.setAttribute('class',get_datastorage[key].id)
let Div3= document.createElement('div');
Div3.setAttribute('class',get_datastorage[key].id)
let Div4= document.createElement('div');
Div4.setAttribute('class',get_datastorage[key].id)
let name= document.createElement('SPAN');
let price=document.createElement('h5');
let img1= document.createElement('img');
let quantity=document.createElement('h5');
let input1= document.createElement('INPUT');
let sum_oftotals=document.createElement('h5');
let checkout=document.createElement('h5');
sum_oftotals.setAttribute('id',get_datastorage[key].id+"sum_oftotals")
input1.setAttribute("type",'number');
input1.setAttribute("id",get_datastorage[key].id);
input1.setAttribute("price",get_datastorage[key].price);
input1.setAttribute("value",get_datastorage[key].quantity);
let btn1 = document.createElement('button')
let span1= document.createElement('span');
span1.setAttribute("id",get_datastorage[key].id)
let array_sum=[]
$(input1).change(function(ev){
  
  var dis= ev.target;
 
    
    let ups= ev.target.value;
    let price= ev.target.getAttribute('price')
    let new_price= parseInt(price)
    let pas_span=document.getElementById(ev.target.getAttribute('id')+"sum_oftotals");
     pas_span.innerHTML=Number(ups) * new_price* parseInt( get_datastorage[key].quantity);
     totalit_arr.push(pas_span.innerHTML)
     sum+=parseInt(sum_oftotals.innerHTML);
     recalculateCart()
    
    
     
  
  
 
})


name.innerHTML=get_datastorage[key].name +"<br>";
price.innerHTML= get_datastorage[key].price+" EUR";
quantity.innerHTML=get_datastorage[key].quantity;
price.setAttribute('class','my-4')
img1.setAttribute("src",get_datastorage[key].image);
input1.setAttribute("type","number");
input1.setAttribute("max",get_datastorage[key].max)
input1.setAttribute("min",1)
input1.setAttribute("class","my-4")
span1.setAttribute("class","col-md-8 spans")
$(span1).css("border-radius","5px solid")
btn1.setAttribute("class","btn btn-outline-danger btn-lg active")
$(btn1).css("width","200px")
$(btn1).css("height","30px")
$(btn1).css("padding","0px")
btn1.setAttribute('id',get_datastorage[key].id)
img1.setAttribute('class', 'w-25')
btn1.setAttribute("value","btn")
btn1.setAttribute("type","btn")
btn1.innerHTML="Remove";
sum_oftotals.innerHTML=parseInt(get_datastorage[key].quantity)*parseInt(get_datastorage[key].price);
sum+=parseInt(sum_oftotals.innerHTML);
Div.appendChild(img1)
Div.appendChild(name)
document.getElementById('item').appendChild(Div);
Div2.style.height="61.5px"

Div2.appendChild(price);
document.getElementById('price').appendChild(Div2);
Div3.appendChild(input1);
document.getElementById('quanity').appendChild(Div3);
Div3.style.height="61.5px";
Div4.appendChild(sum_oftotals);
Div4.appendChild(btn1)
document.getElementById('total').appendChild(Div4);
Div4.style.height="61.5px"
console.log(document.getElementById('total'));

let refs= document.getElementById("refresh")
$(refs).on("click",function(){
  window.location.href="cart.html"
})

$(btn1).on("click",function(ev){
let element=document.getElementById('item').firstChild
  element.remove();
  element=document.getElementById('price').firstChild
  console.log(element)
  element.remove();
  element=document.getElementById('quanity').firstChild
  console.log(element)
  element.remove();
  element=document.getElementById('total').firstChild
  console.log(element)
  element.remove();
sum=sum-parseInt(document.getElementById('total').firstChild.firstChild.innerHTML)

recalculateCart()
 

});

}

recalculateCart()

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
   
      
      checkout.innerHTML=sum+"  EUR";
      
      
    };
    
  }
  
