export default function initVoltarTopoBtn() {
  const btnTopo = document.querySelector('[data-topo="btn"]');
  const sobreSection = document.querySelector('.sobre');
  const offsetTop = sobreSection.getBoundingClientRect().top;

  const scrollContainer = () => document.documentElement || document.body;

  document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > offsetTop) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  const gotToTop = () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  btnTopo.addEventListener('click', gotToTop);
}
