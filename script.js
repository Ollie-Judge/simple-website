document.getElementById("submitButton").onclick = function () {
  alert("Welcome, your visit has been registered.");
};

document.getElementById("logo").onclick = function () {
  alert(
    "we are an organisation pushing the boundaries of technological innovation, We drive change through technical enhancement in the workplace"
  );
};

document.getElementById("submitButton").onclick = function () {
  document.getElementById("validation-box").style.display = "block";
  if (document.getElementById("input-name").value == "") {
    document.getElementById("validation-message").style.color = "red";
    document.getElementById("validation-message").innerHTML =
      "Please enter your name.";
  } else {
    if (document.getElementById("input-license").value === "") {
      document.getElementById("validation-message").style.color = "red";
      document.getElementById("validation-message").innerHTML =
        "Please enter a vehicle license.";
    } else {
      document.getElementById("validation-message").innerHTML =
        "Your registration has been submitted.";
      document.getElementById("validation-box").classList.add("success-box");
    }
  }
};
