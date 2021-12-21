var emailjs;
(function () {
    emailjs.init("user_yXgZSxfMsggnXUbSjudyw");
})();
document.getElementById("myForm").addEventListener("submit", function (event) {
 var name= document.getElementById("Name").value.length;
 var email= document.getElementById("Email").value.length;
 var address= document.getElementById("Address").value.length;
 var city= document.getElementById("City").value.length;
 var state= document.getElementById("State").value.length;
 var zipCode= document.getElementById("ZipCode").value.length;
 var phoneNum= document.getElementById("PhoneNum").value.length;
 var Resume= document.getElementById("Resume").value.length;


if(name==0 || email==0 || address==0 || city==0 || state==0 || zipCode==0 || phoneNum==0 || Resume==0)
  {
    alert("Please fill out all the required fields");
        event.preventDefault();
  }

else
  {
event.preventDefault();
const serviceID = "service_5nyfm2o";
const templateID = "template_mo36vsd";
emailjs.sendForm(serviceID, templateID, this).then((response) => {
alert("Application was successfully submitted,We will inform you about our decision in coming days ");
  document.getElementById("Name").value=""; 
  document.getElementById("Email").value="";
  document.getElementById("Address").value="";
  document.getElementById("City").value="";
  document.getElementById("State").value="";
  document.getElementById("ZipCode").value="";
  document.getElementById("PhoneNum").value="";
  document.getElementById("startDateInput").value="";
  document.getElementById("DateOfBirth").value="";
  document.getElementById("Position").value="";
  document.getElementById("Gender").value="";
  document.getElementById("EmploymentSt").value="";
  document.getElementById("Resume").value="";
},(error) => {
  alert("FAILED...", error);
}); 
}});
