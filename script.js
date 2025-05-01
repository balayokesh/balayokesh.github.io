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

document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', (event) => {
    if (detail.open) {
      document.querySelectorAll('details').forEach((otherDetail) => {
        if (otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    }
  });
});
