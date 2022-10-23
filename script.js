let current = -1;

function changeText() {
  const thingsIDo = [
    "Web development",
    "UI design",
    "Freelancing",
    "Open Source"
  ];
  if (current > 2) {
    current = -1;
  }
  current++;
  document.getElementById("changingContent").innerHTML = thingsIDo[current];
}

setInterval(changeText, 3000);
