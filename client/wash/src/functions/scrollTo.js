export const scrollTo = (onNavClick, id) => {
  if (typeof onNavClick === "function") {
    onNavClick(id);
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
