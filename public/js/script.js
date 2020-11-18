document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.code === "KeyQ") {
    window.open("/compose", "_self");
  }
});
