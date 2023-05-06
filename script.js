let current = -1;

function changeText() {
  const thingsIDo = [
    "Web development",
    "UI design",
    "Open Source"
  ];
  if (current === thingsIDo.length - 1) {
    current = -1;
  }
  current++;
  document.getElementById("changingContent").innerHTML = thingsIDo[current];
}

setInterval(changeText, 3000);
