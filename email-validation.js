const inputText = document.getElementById("email-input");
const notifyBtn = document.getElementById("notify-btn");
const errorZone = document.getElementById("invalid-email");

notifyBtn.addEventListener("click", () => {
  ValidateEmail();
  setTimeout(() => {
      reloadFunction()
      
  }, 2500);
});

const ValidateEmail = () => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    return true;
  } else {
    inputText.style.border = '2px solid #ff5466';
    errorZone.classList.add("show-error");
  }
};


const reloadFunction = () => {
    window.location.reload();
}