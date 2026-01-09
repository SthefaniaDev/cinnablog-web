const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

const form = document.querySelector("#formContato");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede recarregar a página
    alert("Mensagem enviada com sucesso! 💙");
    form.reset(); // limpa o formulário
  });
}

const cards = document.querySelectorAll(".content-box");

cards.forEach(card => {
  const balao = card.querySelector(".balao");
  const texto = card.getAttribute("data-fala");

  balao.textContent = texto;

  card.addEventListener("mouseenter", () => {
    balao.classList.add("ativo");
  });

  card.addEventListener("mouseleave", () => {
    balao.classList.remove("ativo");
  });
});
