export function scrollToMenu() {
  setTimeout(() => {
    document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
  }, 100);
}
