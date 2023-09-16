var typed=new Typed(".text",{
    strings:["Frontend Developer","Php Developer","Web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const firebaseConfig = {
    apiKey: "AIzaSyCBzDnPRBf4Rui_efAEnD-nQ9d5j-4sib0",
    authDomain: "portfolio-c3cab.firebaseapp.com",
    databaseURL: "https://portfolio-c3cab-default-rtdb.firebaseio.com",
    projectId: "portfolio-c3cab",
    storageBucket: "portfolio-c3cab.appspot.com",
    messagingSenderId: "363313106631",
    appId: "1:363313106631:web:f4ec2ff38ef5ea53ceb8e2",
    measurementId: "G-4KFP52MF8N"
  };    

  //initilizaing firebase

 firebase.initializeApp(firebaseConfig);


//   Referencing firebase 

var contactFormDB=firebase.database().ref('contact-form');

//connecting via dom


document.getElementById('contact-form').addEventListener('submit',submitForm); //accesiing via form submit 


function submitForm(e)
{
    e.preventDefault(); 

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

    document.getElementById("contact-form").reset();

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







  