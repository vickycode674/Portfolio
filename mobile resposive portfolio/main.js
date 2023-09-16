var typed=new Typed(".text",{
    strings:["Frontend Developer","Php Developer","Web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

//  Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyD8xyZpBCDUEKHG44SJRHcWsLMqQdXksa0",
    authDomain: "mob-portfolio.firebaseapp.com",
    databaseURL: "https://mob-portfolio-default-rtdb.firebaseio.com",
    projectId: "mob-portfolio",
    storageBucket: "mob-portfolio.appspot.com",
    messagingSenderId: "833456312534",
    appId: "1:833456312534:web:71ff1776d7fe545672b977"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB=firebase.database().ref('mob-portfolio');

  document.getElementById('mob-portfolio').addEventListener('submit',submitForm); //accesiing via form submit 

//   console.log("submitForm function called");


function submitForm(e)
{
    e.preventDefault(); 

    console.log("submitForm function called");

    var Name=getElementVal('name'); 
    var email=getElementVal('email'); 
    var subject=getElementVal('subject')
    var textarea=getElementVal('textarea');


    saveMessages(Name,email,subject,textarea);

   document.querySelector('.alert').style.display="block";

   setTimeout(()=>
   {
    document.querySelector(".alert").style.display="none";
   },4000)

   document.getElementById("mob-portfolio").reset();
}

const saveMessages=(Name,email,subject,textarea) =>
{
    var newContactForm=contactFormDB.push(); 

    newContactForm.set({
        Name:Name,
        email:email,
        subject:subject,
        textarea:textarea,
        
    });
};


const getElementVal=(id)=>
{
    return document.getElementById(id).value;  //rendering the value of the form using id value
}



