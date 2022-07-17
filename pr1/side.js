// var ham = document.querySelector(".ham");
// ham.addEventListener("click", function () {
//   document.querySelector("body").classList.toggle("active");
// });
const openHandler = () =>
  document.querySelector(".sidebar").classList.remove("hidden");
const closeHandler = () => {
  document.querySelector(".sidebar").classList.add("close_sidebar");
  setTimeout(() => {
    document.querySelector(".sidebar").classList.add("hidden");
    document.querySelector(".sidebar").classList.remove("close_sidebar");
  }, 400);
};
document
  .getElementById("open_sidebar_button")
  .addEventListener("click", openHandler);
document.querySelector(".close_button").addEventListener("click", closeHandler);