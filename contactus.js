var emailjs;
(function () {
    emailjs.init("user_yXgZSxfMsggnXUbSjudyw");
})();
document.getElementById("myForm").addEventListener("submit", function (event) {
 var msg= document.getElementById("message").value.length;
 var name= document.getElementById("name").value.length;
 var subject= document.getElementById("subject").value.length;
if(msg==0 || name==0 || subject==0){
    alert("Please fill out all the required fields");
    event.preventDefault();
  }
else{
event.preventDefault();
const serviceID = "service_5nyfm2o";
const templateID = "template_f2y08xs";
emailjs.sendForm(serviceID, templateID, this).then((response) => {
alert("Mail was sent successfully");
  document.getElementById("message").value=""; 
  document.getElementById("name").value="";
  document.getElementById("subject").value="";
  document.getElementById("email").value="";
},(error) => {
  alert("FAILED...", error);
}); 
}});
