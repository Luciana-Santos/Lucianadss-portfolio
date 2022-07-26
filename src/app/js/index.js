import initFetchProjetos from './modules/fetchProjetos';
import ScrollAnima from './modules/scrollAnima';
import initScrollSuave from './modules/scrollsuave';
import initTypingEffect from './modules/typingEffect';
import initVoltarTopoBtn from './modules/voltarTopo';

initScrollSuave();
initFetchProjetos();
initVoltarTopoBtn();
initTypingEffect();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();
