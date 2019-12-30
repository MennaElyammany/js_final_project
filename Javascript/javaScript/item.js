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