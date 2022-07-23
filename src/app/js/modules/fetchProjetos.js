export default function initFetchProjetos() {
  function createProjeto(projeto) {
    const {
      titulo,
      imagem,
      links: { live, code },
    } = projeto;
    const div = document.createElement('div');
    div.classList.add('projeto__container');

    div.innerHTML = `
      <!-- projeto -->
      <div class="projeto__item" data-projeto="content">
        <div class="item__img">
          <img src="${imagem}" alt="${titulo}">
        </div>
        <div class="item__info">
          <p>${titulo}</p>

          <ul>
            <li><a href="${code}">GitHub</a></li>
            <li><a href="${live}">Live</a></li>
          </ul>
        </div>
      </div>
      <!-- fim projeto -->
    `;

    return div;
  }

  async function fetchprojetos(url) {
    const projetosRes = await fetch(url);
    const projetosJson = await projetosRes.json();
    const projetosContainer = document.querySelector(
      '[data-projetos="container"]',
    );

    projetosJson.forEach((projeto) => {
      const divProjeto = createProjeto(projeto);
      projetosContainer.appendChild(divProjeto);
    });
  }

  fetchprojetos('../../projetos.json');
}
