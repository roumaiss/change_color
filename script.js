document.addEventListener("DOMContentLoaded", (event) => {
  // select the color-box and change-color-btn elements
  const btn = document.getElementById("change-color-btn");
  const box = document.getElementById("color-box");
  //   this fucntion return an hexadecimal number
  function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  //   this is function with an RBG color
  function getRandomColorRGB() {
    const randomColorRGB = `rgb(${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )})`;
    return randomColorRGB;
  }
  btn.addEventListener("click", () => {
    // using the hexadecimal color function
    box.style.backgroundColor = getRandomColor();
    // using the RGB color function
    // box.style.backgroundColor = getRandomColorRGB();
  });
});
