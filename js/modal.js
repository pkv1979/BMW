const moreElem = document.querySelector(".more");
const modalElem = document.querySelector(".modal");
// const modalCloseElem = modalElem.querySelector(".modal__close");

const openModal = () => {
  modalElem.classList.remove("hidden");
};

const closeModal = () => {
  modalElem.classList.add("hidden");
};

moreElem.addEventListener("click", openModal);
// modalCloseElem.addEventListener("click", closeModal);
modalElem.addEventListener("click", (e) => {
  const target = e.target;

  if (
    target.classList.contains("overlay") ||
    target.classList.contains("modal__close")
  ) {
    closeModal();
  }
});
