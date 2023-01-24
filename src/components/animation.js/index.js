window.addEventListener("scroll", () => {
  let data = document.getElementsByClassName("reveal");

  for (let i = 0; i < data.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = data[i].getBoundingClientRect().top;
    let revealPoint = 10;
    if (revealTop < windowHeight - revealPoint) {
      data[i].classList.add("active");
    } else {
      data[i].classList.remove("active");
    }
  }
});
