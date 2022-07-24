import initFetchProjetos from './modules/fetchProjetos';
import ScrollAnima from './modules/scrollAnima';
import initScrollSuave from './modules/scrollsuave';
import initVoltarTopoBtn from './modules/voltarTopo';

initScrollSuave();
initFetchProjetos();
initVoltarTopoBtn();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();
