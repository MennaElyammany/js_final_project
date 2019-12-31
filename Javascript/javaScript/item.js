"use strict"
var queryString = decodeURIComponent(window.location.search); //parsing
        //document.write(queryString)
        queryString = queryString.substring(1);
        var queries = queryString.split("&");
        console.log(queries);
        
        let view_name = document.getElementById("id1")
        view_name.innerHTML = queries[0]
        let view_image = document.getElementById("id2")
        view_image.setAttribute('src', queries[1])
        let view_id =document.getElementById("id4")
        view_id.innerHTML= "Product id: "+ queries[3]
        let view_category=document.getElementById("id3")
        view_category.innerHTML="Category: "+ queries[4]
        let view_desc = document.getElementById("id5")
        view_desc.innerHTML= "Description: "+queries[5]
        let view_status = document.getElementById("id6")
        view_status.innerHTML = "Status: "+ queries[6] + "<br>"+"<small>"+"Available Quantity: "+queries[7]+"</small>"
        let view_price=document.getElementById("id7")
        view_price.innerHTML = queries[2]
        let select_quantity=document.getElementById("id8")
        select_quantity.setAttribute('max',queries[7])
       
    let add_tocart= document.getElementById("adds")
    let arr=[]  
    add_tocart.addEventListener("click",function(){
         let ids= queries[3] 
         let names= queries[0] 
         let images= queries[1]
         let prices= queries [2]
         let quantities= select_quantity.value;
         console.log(quantities)
         arr.push({
                id:ids,
                name:names,
                image:images,
                price:prices,
                quantity:Number(quantities)     
         })
         let arr2= []
         for(let key in arr){
                 arr2.push({
                        id:ids,
                        name:names,
                        image:images,
                        price:prices,
                        quantity:Number(quantities)          
                 })
         }
         localStorage.setItem("arr2",JSON.stringify(arr2));
    })  