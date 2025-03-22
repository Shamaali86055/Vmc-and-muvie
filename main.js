function downloadGCode(filename, content) {
  let blob = new Blob([content], { type: "text/plain" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}





let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let e = document.querySelector(".e");
let f = document.querySelector(".f");
let g = document.querySelector(".g");




function btn0() {
  let pass = document.getElementById("pass").value;
  let smg = new SpeechSynthesisUtterance("Password Galat Hai Dobara koshish kijiye");
  
  
  if (pass === "shama") {
    a.hidden = true;
    b.hidden = false;
  } else {
    alert ("wrong password please try again..!")
  }
}



function btn1() {
  c.hidden = false;
  b.hidden = true;
}

function btn11() {
  let main2 = document.querySelector(".main2");
  let main = document.querySelector(".main");
  let drilling = document.querySelector(".drilling");
  
  main2.style.display = "flex";
  main.style.display = "none";
  drilling.hidden = false;
  c.hidden = true;
}





function Aplaybtn() {
  let rpm = parseFloat(document.querySelector(".rpm").value);
  let peak = parseFloat(document.querySelector(".peak").value);
  let deep = parseFloat(document.querySelector(".deep").value);
  let ret = parseFloat(document.querySelector(".ret").value);
  let cod = parseFloat(document.querySelector(".cod").value);
  
  document.querySelector(".drilling").hidden = true;
  document.querySelector(".g").hidden = false;
  
  if (isNaN(rpm) || isNaN(peak) || isNaN(deep) || isNaN(ret) || isNaN(cod)) {
    document.querySelector(".print").innerText = "Invalid input!";
    return;
  }
  
  
  let gcode = `
  G00 G91 G28 Z0 ;
  G00 G80 G49 G40 G21;
  G90 G54 X0 Y0 S${rpm} M3;
  Z100 M08;
  G98 G${cod} Z-${deep} R${ret} Q${peak} F50;
  G80;
  M09;
  G91 G28 Z0;
  M30;`;
  
  
  document.querySelector(".print").innerText = gcode;
  
  downloadGCode("drill1.txt", gcode);
}
function btnback() {
  document.querySelector(".drilling").hidden = true;
  document.querySelector(".main2").style.display = "none";
  
  c.hidden = false;
  document.querySelector(".main").style.display = "flex";
}












