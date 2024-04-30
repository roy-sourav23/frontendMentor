const rating = document.querySelector("#add-rating");
const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector("#submit-btn");
const container1 = document.querySelector("#container1");

let ratingGiven = false;

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {
    rating.textContent = this.value;
    ratingGiven = true;
  });
});

submitBtn.addEventListener("click", function () {
  if (ratingGiven) {
    container1.classList.remove("show");
  }
});
