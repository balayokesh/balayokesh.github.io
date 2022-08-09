let current = -1;

function changeText() {
  const thingsIDo = [
    "Web development",
    "Ui design",
    "Competitive programming",
    "Gaming"
  ];
  if (current > 2) {
    current = -1;
  }
  current++;
  document.getElementById("changingContent").innerHTML = thingsIDo[current];
}

setInterval(changeText, 3000);
