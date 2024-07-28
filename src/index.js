const button = document.getElementById("share-button");

function onClickHandler(e) {
  console.log("Click!");
  console.log("e.target: ", e.target);
}

button.addEventListener("click", onClickHandler);
