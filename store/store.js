const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Price";
  }, 0);
  setTimeout(() => {
    text.textContent = "Quality";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Selling";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
