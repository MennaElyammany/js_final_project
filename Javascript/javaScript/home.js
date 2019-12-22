
let productId=1;
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
        IMG.src = products[i].ProductPicUrl;
        IMG.setAttribute('class','img-fluid');
        IMG.setAttribute('id', productId);
        IMG.addEventListener('click',()=>{                   
            let queryString="?"+IMG.id;      
            window.location.href="item.html"+queryString;
        })
        //for view item create queryString with the product id and pass it to the item.html page 
        body.appendChild(IMG);
        const footer=document.createElement('div');
        footer.setAttribute('class','card-footer bg-transparent border-0');
        const cart=document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart float-right');
        footer.appendChild(cart);
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
    
    