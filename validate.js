function validate() {
  var emailID = document.form.email.value;
  atpos = emailID.indexOf("@"); //PLACE A TEXT BEFORE "@" || PLACE "@" AFTER TEXT

  dotpos = emailID.lastIndexOf("."); //PLACE A TEXT AFTER "."

  if (atpos < 1 || dotpos - atpos < 2) {
    //IF "@" && "." ARE !WELL POSITIONED,

    document.getElementById("email").focus(); //FOCUS ON INPUT
    document.getElementById("error").innerHTML =
      "Please provide a valid email address"; //DISPLAY THIS TEXT
    document.form.email.style.borderColor = "hsl(354, 100%, 66%)"; // CHANGE INPUT BORDER-WIDTH && BORDER-COLOR
    return false; //DO NOT SUBMIT
  } else {
    //IF INPUT IS !EMPTY,
    document.getElementById("email").value = ""; //CLEAR INPUT
    document.form.email.placeholder = "Your email address"; //SHOW PLACEHOLDER
    document.form.email.style.borderColor = "hsl(223, 100%, 88%)"; //CHANGE INPUT BORDER
    document.getElementById("error").innerHTML = ""; //HIDE ERROR TEXT
  } //END ELSE STATEMENT

  return true; //SUBMIT FORM
}
