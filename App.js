const shareOption = () => {
  const shareBtn = document.querySelector(".shareBtn");
  const socialSection = document.querySelector(".social");

  shareBtn.addEventListener("click", () => {
    socialSection.classList.toggle("active");
  });
};
shareOption();
