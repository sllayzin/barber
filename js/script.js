document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");
  const avaliacaoForm = document.getElementById("avaliacaoForm");
  const comentarioInput = document.getElementById("comentario");
  const avaliacoesList = document.getElementById("avaliacoes");
  let notaSelecionada = 0;

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      notaSelecionada = index + 1;
      // Atualiza o visual das estrelas
      stars.forEach((s, i) => {
        if (i < notaSelecionada) {
          s.classList.add("selected");
        } else {
          s.classList.remove("selected");
        }
      });
    });
  });

  avaliacaoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (notaSelecionada === 0) {
      alert("Por favor, selecione uma nota com as estrelas.");
      return;
    }

    const comentario = comentarioInput.value.trim();
    if (!comentario) {
      alert("Por favor, escreva um comentário.");
      return;
    }

    // Cria um novo elemento com a avaliação
    const novaAvaliacao = document.createElement("div");
    novaAvaliacao.classList.add("nova-avaliacao");

    // Monta as estrelas para mostrar a nota
    let estrelasHTML = "";
    for (let i = 0; i < 5; i++) {
      estrelasHTML += i < notaSelecionada ? "&#9733;" : "&#9734;";
    }

    novaAvaliacao.innerHTML = `
      <div class="estrelas-avaliacao">${estrelasHTML}</div>
      <p>${comentario}</p>
    `;

    // Adiciona no topo da lista de avaliações
    avaliacoesList.prepend(novaAvaliacao);

    // Reseta o form
    notaSelecionada = 0;
    stars.forEach((s) => s.classList.remove("selected"));
    comentarioInput.value = "";
  });
});
