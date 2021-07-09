var firebaseConfig = {
    apiKey: "AIzaSyAKc__xrtM-RiTNh_WeKI3g_BF-emgUqto",
    authDomain: "lets-chat-d2ba0.firebaseapp.com",
    databaseURL: "https://lets-chat-d2ba0-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d2ba0",
    storageBucket: "lets-chat-d2ba0.appspot.com",
    messagingSenderId: "617648217649",
    appId: "1:617648217649:web:bcf866c8839e6d91a9bf10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value=""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
name=message_data['name']
msg=message_data['message']
like=message_data['like']
name_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>"
message_tag="<h4 class='message_h4'>"+msg+"</h4>"
like_button="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=name_tag+message_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row
//End code
    } });  }); }
getData();
function updatelike(message_id){
    button_id=message_id 
    likes=document.getElementById(button_id).value 
    update_like=Number(likes)+1
    firebase.database().ref(room_name).child(message_id).update({
          like:update_like
    });
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html"
}