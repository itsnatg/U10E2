// password-script.js
function checkPassword() {
  const passwordInput = document.getElementById('password-input').value;
  const correctPassword = "icansleepnow"; // Replace with your desired password
  const passwordScreen = document.getElementById('password-screen');
  const mainContent = document.getElementById('main-content');
  const errorMessage = document.getElementById('error-message');


  if (passwordInput === correctPassword) {
      passwordScreen.style.display = 'none';
      mainContent.style.display = 'block';
  } else {
      errorMessage.style.display = 'block';
  }
}

document.getElementById('password-input').addEventListener('keypress', function(event) {
  // Check if the pressed key is Enter (keyCode 13)
  if (event.key === 'Enter') {
      // Call the checkPassword function to submit the password
      checkPassword();
  }
});



// Function to open the modal with specific content
function openModal(modalId, contentId, content) {
  document.getElementById(contentId).innerHTML = content;
  document.getElementById(modalId).style.display = "block";
  document.body.classList.add("modal-open"); // Prevent scrolling
}

// Function to close the modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.classList.remove("modal-open"); // Allow scrolling
}

// Get all <span> elements that close the modals
var spans = document.getElementsByClassName("close");
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
      var modalId = this.getAttribute('data-modal-id');
      closeModal(modalId);
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal1')) {
      closeModal(event.target.id);
  }
}

// Event listeners for buttons
document.getElementById("openModalButton1").onclick = function() {
  openModal("myModal1", "modalText1", "Compositional reference");
}
document.getElementById("openModalButton2").onclick = function() {
  openModal("myModal2", "modalText2", "Compositional and narrative reference");
}
document.getElementById("openModalButton3").onclick = function() {
  openModal("myModal3", "modalText3", "Content for Modal 3");
}
document.getElementById("openModalButton4").onclick = function() {
  openModal("myModal4", "modalText4", "Content for Modal 4");
}
document.getElementById("openModalButton5").onclick = function() {
  openModal("myModal5", "modalText5", "Content for Modal 5");
}
document.getElementById("openModalButton6").onclick = function() {
  openModal("myModal6", "modalText6", "Content for Modal 6");
}
document.getElementById("openModalButton7").onclick = function() {
  openModal("myModal7", "modalText7", "Compositional and narrative reference");
}
document.getElementById("openModalButton8").onclick = function() {
  openModal("myModal8", "modalText8", "Content for Modal 8");
}
document.getElementById("openModalButton9").onclick = function() {
  openModal("myModal9", "modalText9", "Content for Modal 9");
}
document.getElementById("openModalButton10").onclick = function() {
  openModal("myModal10", "modalText10", "Content for Modal 10");
}
document.getElementById("openModalButton11").onclick = function() {
  openModal("myModal11", "modalText11", "Content for Modal 11");
}
document.getElementById("openModalButton12").onclick = function() {
  openModal("myModal12", "modalText12", "Content for Modal 12");
}
document.getElementById("openModalButton13").onclick = function() {
  openModal("myModal13", "modalText13", "Conceptual Reference");
}
document.getElementById("openModalButton14").onclick = function() {
  openModal("myModal14", "modalText14", "Content for Modal 14");
}
document.getElementById("openModalButton15").onclick = function() {
  openModal("myModal15", "modalText15", "Content for Modal 15");
}
document.getElementById("openModalButton16").onclick = function() {
  openModal("myModal16", "modalText16", "Content for Modal 16");
}