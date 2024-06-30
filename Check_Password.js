document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Check the password
    var enteredPassword = document.getElementById("passwordInput").value;
    var correctPassword = "glimpse"; 
    
    if (enteredPassword === correctPassword) {

      setTimeout(function() {
        setTimeout(function(){ 
          window.location.href = "exhibition_2.html";
        }, 2000);
      }, 0);

    } else {

      alert("I think you are already ready. I will give you another chance. \nJust type glimpse, only with lower case.");
      document.getElementById("passwordInput").value = "";

    }
    
  });
  