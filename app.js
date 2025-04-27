
let msg = document.querySelector("#msg");
let btn = document.querySelector("#P");

btn.addEventListener("click", function () {
  const age = prompt("Please enter your age:");

  if (age >= 18) {
    window.location.href = "notice.html";

   

    
  } else {
    msg.innerText = "Sorry you can not enter. You must be 18+";

    msg.style.transform = "translate(-2%,-10%) scale(1)";
    msg.style.opacity = 0.8;

    setTimeout(function () {
      msg.style.opacity = 0;
      msg.style.display = 'none'
    }, 4000);
  }

  
});
