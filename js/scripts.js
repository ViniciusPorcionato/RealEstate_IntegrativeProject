document.addEventListener("DOMContentLoaded", function () {
  // Controle das abas (COMPRAR/ALUGAR)
  const tabButtons = document.querySelectorAll(".tab-button");
  let currentAction = "comprar";

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      currentAction = this.dataset.action;
    });
  });

  // Controle do formulário de busca
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href =
        currentAction === "comprar"
          ? "imoveis-venda.html"
          : "imoveis-aluga.html";
    });
  }
});

// Função para o carrossel (simplificada)
function scrollCarousel(direction) {
  const container = document.querySelector(".carousel-track");
  if (!container) return;

  container.scrollBy({
    left: 300 * direction,
    behavior: "smooth",
  });
}

// Função ao clicar no card e abrir detalhes
