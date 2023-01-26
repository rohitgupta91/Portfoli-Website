emailjs.init("t-Qke4YhuPtf83wNf");
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // var para={
    //     ,   
    // }
    
    emailjs.send("service_39hab19","template_znc4jpm",{
        message: document.getElementById('msg').value,
        from_name:document.getElementById('fromname').value,
        to_name:"Gaurav",
        title_name:document.getElementById('title').value,
        name:document.getElementById('name').value
        });
  });

  
}

function sendalert(){
    alert('message sent succesfully')
}
