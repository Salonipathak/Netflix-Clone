document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".language-button");
  const options = document.querySelector(".language-options");

  button.addEventListener("click", function () {
    options.style.display = options.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !options.contains(event.target)) {
      options.style.display = "none";
    }
  });
});
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.icon');

  if (answer.classList.contains('open')) {
    answer.classList.remove('open');
    icon.classList.remove('open');
  } else {
    answer.classList.add('open');
    icon.classList.add('open');
  }
}
