"use strict"
var queryString = decodeURIComponent(window.location.search);
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
        view_category.innerHTML= queries[4]
        let view_desc = document.getElementById("id5")
        view_desc.innerHTML= queries[5]
        let view_status = document.getElementById("id6")
        view_status.innerHTML = "Status: "+ "<span class='text-success'>"+queries[6]+"</span>" + "<br>"+"<small>"+"Available Quantity: "+queries[7]+"</small>"
        let view_price=document.getElementById("id7")
        view_price.innerHTML = queries[2] +"     EUR"
        let select_quantity=document.getElementById("quantity")
        select_quantity.setAttribute('max',queries[7])

    let add_tocart= document.getElementById("adds")
    let arr=[]  
    add_tocart.addEventListener("click",function(){
           if(document.getElementById("quantity").value>queries[7]){
                  alert( "Available quantity is"+queries[7]);
           }
           else{
         let ids= queries[3] 
         let names= queries[0] 
         let images= queries[1]
         let prices= queries [2]
         let quantities= document.getElementById("quantity").value;
         
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
         let existingEntries;
         if(localStorage.getItem("allEntries")!=""){
         existingEntries = JSON.parse(localStorage.getItem("allEntries"));}
         else  existingEntries = [];
         existingEntries.push(arr2);
         localStorage.setItem("allEntries",JSON.stringify(existingEntries));
    }})  
