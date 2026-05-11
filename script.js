const TOAST_MESSAGE = "Product added to the cart";
const VISIBLE_MS = 3000;
const EXIT_MS = 400;

const button = document.querySelector(".button");
const toast = document.querySelector(".toast");

let hideTimer = null;
let resetTimer = null;

button.addEventListener("click", () => {
  clearTimeout(hideTimer);
  clearTimeout(resetTimer);

  toast.textContent = TOAST_MESSAGE;
  toast.classList.remove("is-leaving");
  toast.classList.add("is-visible");

  hideTimer = setTimeout(() => {
    toast.classList.add("is-leaving");

    resetTimer = setTimeout(() => {
      toast.classList.add("no-transition");
      toast.classList.remove("is-visible", "is-leaving");
      // Force a reflow so the snapped-back position is committed
      // before we re-enable transitions.
      void toast.offsetWidth;
      toast.classList.remove("no-transition");
    }, EXIT_MS);
  }, VISIBLE_MS);
});
