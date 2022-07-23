export default function initProjetoModal() {
  const projetos = document.querySelectorAll('[data-projeto="content"]');
  const modal = document.querySelectorAll('[data-modal="container"]');
  const btnFechar = document.querySelectorAll('[data-modal="fechar"]');
  const ativo = 'ativo';

  function fecharModal() {
    modal.forEach((itemModal) => {
      itemModal.classList.remove(ativo);
    });
  }

  function abrirModal(index) {
    fecharModal();
    modal[index].classList.add(ativo);
  }

  if (projetos.length && modal.length) {
    projetos.forEach((projeto, index) => {
      projeto.addEventListener('click', () => abrirModal(index));
    });
  }

  btnFechar.forEach((btn) => {
    btn.addEventListener('click', fecharModal);
  });

  window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('projeto__container')) {
      console.log('não tem modal');
    }
  });
}
