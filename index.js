let slider = document.getElementById("myRange");
let numeric = document.getElementById("numeric");
let output = document.getElementById("month");
let icon = document.querySelector(".icon")


slider.onchange = function () {
  numeric.innerHTML = slider.value;
}
icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    icon.src = "./dark theme icon/sun.png"
  }else{
    icon.src = "./dark theme icon/moon.png"
  }
  
}





