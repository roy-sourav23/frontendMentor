const questions = document.querySelectorAll(".ques-ans-block");

questions.forEach((li) => {
  const quesBlock = li.querySelector(".ques-block");
  const answer = li.querySelector(".answer");

  quesBlock.addEventListener("click", () => {
    // Hide all answers
    questions.forEach((otherLi) => {
      if (otherLi !== li) {
        const otherAnswer = otherLi.querySelector(".answer");
        otherAnswer.classList.add("hidden");

        const icon = otherLi.querySelector(".ques--icon");
        icon.src = "./assets/images/icon-plus.svg";
        icon.alt = "icon-plus";
      }
    });

    // Toggle current answer
    answer.classList.toggle("hidden");

    // Toggle icon
    const icon = li.querySelector(".ques--icon");
    if (icon.alt === "icon-plus") {
      icon.src = "./assets/images/icon-minus.svg";
      icon.alt = "icon-minus";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
      icon.alt = "icon-plus";
    }
  });
});
