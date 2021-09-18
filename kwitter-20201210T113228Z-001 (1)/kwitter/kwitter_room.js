const firebaseConfig = {
      apiKey: "AIzaSyDVRxBIqi4qptE5otOs7b5ALi2gnkuAv_s",
      authDomain: "classtest-40e9f.firebaseapp.com",
      projectId: "classtest-40e9f",
      storageBucket: "classtest-40e9f.appspot.com",
      messagingSenderId: "286040615725",
      appId: "1:286040615725:web:46e5232f379ad7282801a4",
      measurementId: "G-EWNEKCV7XP"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update
            (
                  {
                        purpose : "adding room name"
                  }
            );

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}