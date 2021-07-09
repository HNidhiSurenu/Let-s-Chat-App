
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAKc__xrtM-RiTNh_WeKI3g_BF-emgUqto",
    authDomain: "lets-chat-d2ba0.firebaseapp.com",
    databaseURL: "https://lets-chat-d2ba0-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d2ba0",
    storageBucket: "lets-chat-d2ba0.appspot.com",
    messagingSenderId: "617648217649",
    appId: "1:617648217649:web:1dc84ffde2efc0e5a9bf10"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
    user_name= localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+user_name

    function addroom(){
          room_name=document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
          });
          localStorage.setItem("room_name",room_name)
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData(); 
function redirecttoroomname(name){
      localStorage.setItem("room_name", name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
