const article = document.querySelector("article");

function onClickHandler(e) {
  console.log("Click!");
  console.log("e.target: ", e.target);
}

article.addEventListener("click", onClickHandler);
