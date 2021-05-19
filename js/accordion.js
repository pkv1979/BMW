document.addEventListener("DOMContentLoaded", () => {
  const featureLinkElems = document.querySelectorAll(".feature__link");
  const featureSubElems = document.querySelectorAll(".feature-sub");

  featureLinkElems.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("feature__link_active")) {
        featureLinkElems.forEach((element) => {
          element.classList.remove("feature__link_active");
        });
        featureSubElems.forEach((element) => {
          element.classList.add("hidden");
        });
      }

      item.classList.toggle("feature__link_active");
      featureSubElems[index].classList.toggle("hidden");
    });
  });
});
