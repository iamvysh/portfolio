function sendMail(){
    var params={
        name:document.getElementById("name"),
        email:document.getElementById("email"),
        message:document.getElementById("message")
    }
const serviceID="service_ukf79fl";
const templateID="template_iqqe34l"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("message sent successfully")
    }
    
)
.catch((err) => console.log(err));
}
