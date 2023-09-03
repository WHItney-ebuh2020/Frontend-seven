const links = document.querySelectorAll(".bigcontainerli");

links.forEach(link => {
  const sibling = link.nextElementSibling;

  if (sibling) {
    if (sibling.nodeName === "DIV") {
      link.addEventListener("click", () => {
        sibling.childNodes[1].classList.toggle("open");
      });
    }
  }
});
