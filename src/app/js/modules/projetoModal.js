export default function initProjetoModal() {
  const projetos = document.querySelectorAll('[data-projeto="content"]');
  const modal = document.querySelectorAll('[data-projeto="modal"]');
  const body = document.querySelector('body');
  const btnFechar = document.querySelectorAll('[data-modal="fechar"]');
  const ativo = 'ativo';
  const noScroll = 'no-scroll';

  if (projetos.length && modal.length) {
    function abrirModal(index) {
      fecharModal();
      body.classList.add(noScroll);
      modal[index].classList.add(ativo);
    }
    projetos.forEach((projeto, index) => {
      projeto.addEventListener('click', () => abrirModal(index));
    });
  }

  function fecharModal() {
    modal.forEach((itemModal) => {
      itemModal.classList.remove(ativo);
    });
    body.classList.remove(noScroll);
  }

  btnFechar.forEach((btn) => {
    btn.addEventListener('click', fecharModal);
  });
}
