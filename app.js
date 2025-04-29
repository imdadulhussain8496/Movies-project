let msg = document.querySelector("#msg");
let btn = document.querySelector("#P");

btn.addEventListener("click", function () {
  const age = prompt("Please enter your age:");

  if (age >= 18) {
    window.location.href = "notice.html";
  } else {
    msg.innerText = "Sorry you can not enter. You must be 18+";

    msg.style.opacity = 0.8;

    setTimeout(function () {
      msg.style.opacity = 0;
      msg.style.display = "none";
    }, 4000);
  }
});



//peter click page 

let peter = document.querySelector(".Peter");

peter.addEventListener("click", function () {
  window.location.href = "peter.html";
  
});

//peter click page 
let electric = document.querySelector(".Electric");

electric.addEventListener("click", function () {
  window.location.href = "electric.html";
  
});

//Bullet click page 
let bullet = document.querySelector(".Bullet");

bullet.addEventListener("click", function () {
  window.location.href = "bullet.html";
  
});


//Khilre click page 
let khilre = document.querySelector(".Khilre");

khilre.addEventListener("click", function () {
  window.location.href = "Khilre.html";
  
});

//Little click page 
let little = document.querySelector(".Little");

little.addEventListener("click", function () {
  window.location.href = "little.html";
  
});
