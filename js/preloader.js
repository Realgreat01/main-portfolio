const mainTag = document.querySelectorAll("main");
const preloader = document.getElementById("preloader");

// CHECK  IF PRELOADER IS LOADED
const getLoadersData = sessionStorage.getItem("loaders");
if (getLoadersData == "loaded") {
  preloader.style.display = "none";
  preloader.style.visibility = "hidden";
  mainTag.forEach((items) => {
    items.style.opacity = "1";
  });
  sessionStorage.setItem("loaders", "loaded");
}

setTimeout(() => {
  preloader.style.visibility = "hidden";
  preloader.style.transition = "2s";
  preloader.style.opacity = "0";
  document.body.style.overflow = "visible";
  sessionStorage.setItem("loaders", "loaded");
  mainTag.forEach((items) => {
    items.style.opacity = "1";
  });
}, 2000);
