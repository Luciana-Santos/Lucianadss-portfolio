import initProjetoModal from './projetoModal';

export default function initFetchProjetos() {
  function createProjeto(projeto) {
    const {
      titulo,
      descricao,
      imagem,
      links: { live, code },
      tecnologies,
    } = projeto;
    const div = document.createElement('div');
    div.classList.add('projeto__container');

    div.innerHTML = `
        <div class="projeto__item" data-projeto="content">
          <div class="item__img">
            <img src="${imagem}" alt="${titulo}">
          </div>
          <div class="item__info">
            <p>${titulo}</p>
          </div>
        </div>

        <div class="modal" data-projeto="modal">
          <h2>${titulo}</h2>

          <div class="modal__content">
            <div class="modal__info">
              <p>${descricao}</p>

              <ul class="info__icons">
                ${tecnologies
                  .map(
                    (item) =>
                      `<li><img src="${item.icon}" alt=""><span>${item.label}</span></li>`,
                  )
                  .join('')}
              </ul>

              <ul class="modal__links">
                <li><a href="${live}">Live</a></li>
                <li><a href="${code}">GitHub</a></li>
              </ul>
            </div>

            <div class="modal__img">
              <img src="${imagem}" alt="${titulo}">
            </div>
          </div>

          <div data-modal="fechar" class="close-modal">
            <img src="./assets/img/close-icon.svg" alt="">
          </div>
        </div>
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
    initProjetoModal();
  }

  fetchprojetos('../../projetos.json');
}
