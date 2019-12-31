window.onload = function(){
    getCartItems: if(localStorage.getItem('allEntries') == null){
        break getCartItems;
    }else{
        var Cartes = JSON.parse(localStorage.getItem('allEntries'));
        let arr_appends = [];
        for(let key in Cartes){
            arr_appends.push({
            id:Cartes[key].id,
            name:Cartes[key].name,
            image:Cartes[key].image,
            price:Cartes[key].Price,
            quantity:Cartes[key].quantity
            
            
            });
        }
        localStorage.setItem('new_cart' , JSON.stringify(arr_appends));
    }
}
let count=0;
let productId=1;
let total =0;

//let arr_ofdetails=[];

let getItems= (showItems) => {

	const URL = 'https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json';
	
    const METHOD = 'GET';
    let xhr = new XMLHttpRequest();
    xhr.open(METHOD, URL);
    xhr.send();
    xhr.onerror = (err) => {
        console.error(err);
    }
    xhr.onload = (res) => {
        if(xhr.status == 200){
            
            const RES = JSON.parse(xhr.response);
			
            
            return showItems(RES.ProductCollection);
        }
    }
}
let showItems= (products) => {   
     
   let productsNo=3;
   let content=document.getElementById('content');
   let Div =document.createElement('div');
   Div.setAttribute('class','row');
   content.appendChild(Div);
    for(let i=0;i<products.length;i++){
        console.log("appended");
        if(productsNo==3){
         Div =document.createElement('div');
        Div.setAttribute('class','row');
        content.appendChild(Div);
       
        

        }
        const card=document.createElement('div');
        card.setAttribute('class','card col-4' );
        Div.appendChild(card);
        const body=document.createElement('div');
        body.setAttribute('class','card-body');
        card.appendChild(body);
        const title=document.createElement('h5');
        title.setAttribute('class','card-title text-primary');
        title.innerHTML=products[i].Name;
        body.appendChild(title);
        const IMG = new Image();
        console.log(IMG);
        IMG.src = products[i].ProductPicUrl;
        IMG.setAttribute('class','img-fluid');
        IMG.setAttribute('id', productId);
        IMG.addEventListener('click',()=>{
           /*  let image = IMG.src ;
            console.log(image)  
              let image_price=products[i].Price;
              console.log(image_price); */
                           
            let queryString='?'+products[i].Name+'&'+IMG.src+'&'+products[i].Price+'&'+products[i].ProductId+'&'+products[i].Category+'&'+products[i].Description+'&'+products[i].Status+'&'+products[i].Quantity;      
            window.location.href="item.html"+queryString;
        })
        //for view item create queryString with the product id and pass it to the item.html page 
        body.appendChild(IMG);
        const footer=document.createElement('div');
        footer.setAttribute('class','card-footer bg-transparent border-0');
        const cart=document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart float-right');
        const btn=document.createElement('button');
        btn.setAttribute('class','btn-primary');
        btn.appendChild(cart);
        footer.appendChild(btn);
        
        $(btn).on('click',function(ev){

        
            var dis= ev.target.parentNode;
            console.log(dis)
            dis.setAttribute("disabled",null);
             
            var num_counts= ++count;
            total+= products[i].Price; 
            console.log(total);
            
            var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
            if(existingEntries == null) existingEntries = [];
            //var entryTitle = document.getElementById("himaa").value;
            //var entryText = inputs1.value;
            var entry = {
                    id:products[i].ProductId,
                    name:products[i].Name,
                    image:products[i].ProductPicUrl,
                    price:products[i].Price,
                    quantity:products[i].Quantity,
                   // "counts":count 
            };
            localStorage.setItem("entry", JSON.stringify(entry));
            // Save allEntries back to local storage
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
            var new_cart= JSON.parse(localStorage.getItem('new_cart'));
            let array = [];
            for(let key  in new_cart){

                array.push({
                    id:new_cart[key].id,
                    name:new_cart[key].name,
                    image:new_cart[key].image,
                    price:new_cart[key].Price,
                    quantity:new_cart[key].quantity
                });
                vvv: if(array == null){
                    break vvv;
                 }else{
                    var object = array.reduce(
                       (obj,item) => Object.assign(obj,{
                          ["id"]:item.id,
                          ["name"]:item.name,
                          ["image"]:item.image,
                          ["price"]:item.price,
                          ["quantity"]:item.quantity
                          
                          
              
                       }),{}
                    );
                       existingEntries.push(object);
                       console.log(object)
                       const arr_fin = [...new Map(existingEntries.map(item =>
                        [item['id'],item])).values()]
                        localStorage.setItem('allEntries' , JSON.stringify(arr_fin));
                    }
            }
           
        
            console.log(count);
            var fixed_div1=document.getElementById('myCart1');
            fixed_div1.innerHTML="counts: "+num_counts;
            var fixed_div2=document.getElementById('myCart2');
            fixed_div2.innerHTML="total price: "+total;
            //console.log (existingEntries[id]);
            
            console.log(ev.target);
               
        });
            
            // if(entry.id===existingEntries.id){
            //     ev.target.disabled= true
            // }
            
           // if ()
            
       
        const price=document.createElement('span');
        price.innerHTML=products[i].Price+" "+products[i].CurrencyCode;
        price.setAttribute('class','text-danger');
        footer.appendChild(price);
        card.appendChild(footer);
        productId++;
        if(productsNo==1)
        productsNo=3;
        else
        productsNo--;
     
    }}
    getItems(showItems);
    
    function tocart(){
        window.location.href= "cart.html";
    }