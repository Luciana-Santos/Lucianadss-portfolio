export default function initFetchProjetos() {
  function createProjeto({ titulo, imagem, descricao, tecnologies, links }) {
    const div = document.createElement('div');
    div.dataset.projeto = 'content';
    div.classList.add('projeto__container');

    div.innerHTML = `
        <div class="projeto__item">
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
                <li><img src="${tecnologies.css.icon}" alt="${tecnologies.css.label}"><span>${tecnologies.css.label}</span></li>
                <li><img src="./assets/img/javascript-icon.png" alt=""><span>JavaScript</span></li>
                <li><img src="./assets/img/react-icon.png" alt=""><span>React.js</span></li>
              </ul>

              <ul class="modal__links">
                <li><a href="#">Live</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>

            <div class="modal__img">
              <img src="./assets/img/projeto-teste.png" alt="">
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
  }

  fetchprojetos('../../projetos.json');
}
