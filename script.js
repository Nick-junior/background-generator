var color1 = document.querySelector(".color1");
var color2=document.querySelector(".color2");
var gradient=document.getElementById("gradient");
var css=document.querySelector("h3");
console.log(gradient);

function setGradient(){
	gradient.style.background = "linear-gradient(to right,"+color1.value+ "," + color2.value+ ")";
	css.textContent = gradient.style.background + ";";

}

//color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient);
