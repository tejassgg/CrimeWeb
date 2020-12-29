firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("after_login").style.display = "block";
        document.getElementById("before_login").style.display = "none";
            
      } else {
        // No user is signed in.
        document.getElementById("after_login").style.sdisplay = "none";
        document.getElementById("before_login").style.display = "block";
      }
  });

  
  
  function login() {
  
      var userEmail = document.getElementById("email_field").value;
      var userPassword = document.getElementById("password_field").value;
  
      firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error: " + errorMessage);

      });

  }

  function logout() {
    firebase.auth().signOut();
  }

  var rootref = firebase.database().ref().child('ReportCrime').orderByChild('timeStamp');

  rootref.on("child_added", snap => {
    
    var type = snap.child("type").val();
    var location = snap.child("address").val();
    var status = snap.child("application").val();
    var date = snap.child("reportDate").val();
    var time = snap.child("reportTime").val();
    var desc = snap.child("description").val();
    var lat = snap.child("latitude").val();
    var lon = snap.child("longitude").val();

    var direction = "https://maps.google.com/maps?f=q&t=m&q="+ lat + "," + lon;

    function clickbutton() {
      window.location.reload("https://maps.google.com/maps?f=q&t=m&q="+ lat + "," + lon);

    }


    var loc = " Get Location";

  //  $("#table_body").append("<tr><td>"+ type + "</td><td>" + location + "</td><td>" + date + "</td><td>" + time + "</td><td>" + desc + "</td><td>" + status + "</td><td><button>" + direction + "</button></td></tr>");

    $("#table_body").append("<tr><td>"+ type + "</td><td>" + location + "</td><td>" + date + "</td><td>" + time + "</td><td>" + desc + "</td><td>" + status + "</td><td><button onclick= 'clickbutton()'>" + direction + "</button></td></tr>");


  });

  


  

  