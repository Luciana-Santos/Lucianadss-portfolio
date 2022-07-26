export default function initTypingEffect() {
  const heroSubtitle = document.querySelector('[data-effect="typing"]');

  function typingEffect(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 95 * i);
    });
  }

  typingEffect(heroSubtitle);
}
