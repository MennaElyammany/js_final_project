let sendEmail=()=>{
    let form=document.getElementById("contact_us");
    let f=new FormData(form);
    let data=JSON.stringify({
        'name':form.elements.Name.value,
        'email':form.elements.email.value,
        'subject':form.elements.subject.value,
        'message':form.elements.message.value
    
    });
    
    const METHOD='POST';
    const URL='https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us?fbclid=IwAR2u7ulT9JaWbJ57sy09Yn6WuYWSbyn0AzhEDmnjVWIalepVe_pManTvr-4';
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', URL);
    xhr.setRequestHeader('Content-type','application/json ; charset=utf-8'); 
    xhr.send(data);
    xhr.onerror = (err) => {
        console.error(err);
    }
    xhr.onload = () => {
    console.log(xhr.response);
    document.getElementById("thanksP").innerHTML="THANK YOU " + form.elements.Name.value;
    document.getElementById("alert").style.display="block";
    form.reset();
    
    
    }
    
    }

document.getElementById('contact_us').addEventListener('submit',function(event){
    event.preventDefault();
    sendEmail();
    
   



});

