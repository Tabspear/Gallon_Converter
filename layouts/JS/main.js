// This changes text color
const inputDis = document.querySelector("#input_info")
const output = document.getElementById('output')
const sideBar = document.querySelector("#sideDisplay");
const cancel = document.querySelector("#cancel");
sideBar.addEventListener("click", displaySideBar);
function displaySideBar() {


  let bar_set = document.getElementById("main_sideBar");

  if (bar_set.style.display === "block") {
    bar_set.style.display = "none";
  } else {
    bar_set.style.display = "block";
  }
  let timer = setInterval(() => {
    let timePassed = 0;
    if (timePassed >= 2000) {
      clearInterval(timer);
      return;
    } else bar_set.style.left;
  });

}



cancel.addEventListener("click", closeIt);
function closeIt() {
  document.getElementById("main_sideBar").style.display = "none";
}

const main_dropDown = document.querySelector("#menu-button");
main_dropDown.addEventListener("click", Dropdown);
function Dropdown() {
  let drop_bar = document.querySelector("#dropdownId");
  if (drop_bar.style.display === "block") {
    drop_bar.style.display = "none";
  } else {
    drop_bar.style.display = "block";
  }
}


// Onclick of the any of unit of measurement, whatever is inputed as value would  be converted and displayed as output in the innerHTML
// Declare the buttons using the dom api event listeners
let gal_btn = document.querySelector("#menu-item-0");
let ltr_btn = document.querySelector("#menu-item-1");
let kilo_btn = document.querySelector("#menu-item-2");
let metr_btn = document.querySelector("#menu-item-3");
let cel_btn = document.querySelector("#menu-item-4");
let fara_btn = document.querySelector("#menu-item-5");

const galToltrs = (ltr) => {
  let oneGal = 3.78541//ltrs;
  ltr = ltr * oneGal
   return ltr * oneGal
}

const ltrsToGal= (gal)=>{
  let oneLtr = 0.264172;//gal
   return oneLtr*gal
  
  }

  const metToKilomters = (met)=>{
    let oneMet = 1000;
    return met*1000;
  }
  const kilometTomters = (kilomet)=>{
    let oneKilomet = 0.001;
    return oneKilomet * kilomet
  }
  const celToFar = (ce)=>{
    let oneFar = (ce * 9/5) + 32 
    return oneFar
  }

  const farTocel = (far)=>{
    let oneCe = (far-32) * 5/9
    return oneCe
  }
  

//Add event listeners to the code and swap the unit name to what is in the code. ltr is the parameter the number to be put into
gal_btn.addEventListener("click", galBtn);
function galBtn() {
  main_dropDown.innerHTML = gal_btn.innerHTML;
  output.innerHTML= galToltrs(inputDis.value)
  
}

ltr_btn.addEventListener("click", ltrBtn);
function ltrBtn() {
  main_dropDown.innerHTML = ltr_btn.innerHTML;
  output.innerHTML= ltrsToGal(inputDis.value)
}
kilo_btn.addEventListener("click", kiloBtn);
function kiloBtn() {
  main_dropDown.innerHTML = kilo_btn.innerHTML;
  output.innerHTML= kilometTomters(inputDis.value)
}
metr_btn.addEventListener("click", metrBtn);
function metrBtn() {
  main_dropDown.innerHTML = metr_btn.innerHTML;
  output.innerHTML = metToKilomters(inputDis.value)
}
cel_btn.addEventListener("click", celBtn);
function celBtn() {
  main_dropDown.innerHTML = cel_btn.innerHTML;
  output.innerHTML= celToFar(inputDis.value)
}
fara_btn.addEventListener("click", faraBtn);
function faraBtn() {
  main_dropDown.innerHTML = fara_btn.innerHTML;
  output.innerHTML=farTocel(inputDis.value)
}


