export default function initProjetoModal() {
  const projeto = document.querySelector('[data-projeto="content"]');
  const modal = document.querySelector('[data-projeto="modal"]');
  const body = document.querySelector('body');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const ativo = 'ativo';
  const noScroll = 'no-scroll';

  function abrirModal(e) {
    e.preventDefault();
    modal.classList.add(ativo);
    body.classList.add(noScroll);
  }

  function fecharModal() {
    modal.classList.remove(ativo);
    body.classList.remove('no-scroll');
  }

  projeto.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
}
