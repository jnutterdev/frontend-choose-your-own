function validateForm() {
    const unsuccessful = document.getElementById("unsuccessful");
    const successful = document.getElementById("successful");
    const missingName = document.forms["commentfeed"]["name"].value;
    const missingMessage = document.forms["commentfeed"]["message"].value;
    
    if (unsuccessful.style.display === "none" && missingName === "") {
      unsuccessful.style.display = "block";
      return false;
    } else if (unsuccessful.style.display === "none" && missingName !== ""){
      successful.style.display = "block";
    } else {
        unsuccessful.style.display === "none";
    }

    if (unsuccessful.style.display === "none" && missingMessage === "") {
        unsuccessful.style.display = "block";
    } else if (unsuccessful.style.display === "none" && missingMessage !== "") {
        successful.style.display = "block";
    }
  }

  