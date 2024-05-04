const shareButton = document.querySelector("#share-btn");

const toolTip = document.querySelector("#share-btn--info");
const profileSection = document.querySelector(".profile--info")

shareButton.addEventListener("click", function () {
    toolTip.classList.toggle("hidden")
});
