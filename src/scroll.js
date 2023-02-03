export const scrollTo = (id, behavior = "smooth") => {
  const section = document.getElementById(id);
  window.scrollTo({
    top: section.offsetTop - 80,
    behavior,
  });
};
