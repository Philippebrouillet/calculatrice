const buttons = document.querySelectorAll("button");

const result = document.getElementById("total");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (result.textContent == 0) {
      result.textContent = e.target.id;
    } else {
      result.textContent += e.target.id;
    }
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = 0;
});
