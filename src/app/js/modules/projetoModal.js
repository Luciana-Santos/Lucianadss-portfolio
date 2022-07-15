export default function initProjetoModal() {
  const projetos = document.querySelectorAll('[data-projeto="content"]');
  const modal = document.querySelectorAll('[data-projeto="modal"]');
  const body = document.querySelector('body');
  const btnFechar = document.querySelectorAll('[data-modal="fechar"]');
  const ativo = 'ativo';

  if (projetos.length && modal.length) {
    function abrirModal(index) {
      fecharModal();
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
  }

  btnFechar.forEach((btn) => {
    btn.addEventListener('click', fecharModal);
  });
}
