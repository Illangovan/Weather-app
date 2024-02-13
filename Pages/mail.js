function send()
{
  var email=document.getElementById("mail").value();
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "andrewillango1212@gmail.com",
    Password : "9D9E043D5AE9E62F78855956D7501B754299",
    To : 'andrewillango1212@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
/*
const form= document.getElementById('formDetail');
const firebaseConfig = {
    apiKey: "AIzaSyCC4yvd3FGAioZCynPufyqMvFmc7c-4cVs",
    authDomain: "weather-app-e0afa.firebaseapp.com",
    databaseURL: "https://weather-app-e0afa-default-rtdb.firebaseio.com",
    projectId: "weather-app-e0afa",
    storageBucket: "weather-app-e0afa.appspot.com",
    messagingSenderId: "23951106166",
    appId: "1:23951106166:web:d1501d81bb7ea26017ff57"
  };
//initialize firebase 
  firebase.initializeApp(firebaseConfig);
  //referance your database
  var formDB=firebase.database().ref('weather-app')
 form.addEventListener("submit",(e)=>
  {
    e.preventDefault();
    const name=document.getElementById('name').value;
    const mail=document.getElementById('mail').value;
    const area=document.getElementById('area').value;
    formDB.push(
      {
        name:name,
        email:mail,
        Message:area
      }
    )
console.log(name);
form.reset();
  })
*/