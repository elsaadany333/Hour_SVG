import {el} from './lib.js';

export function triggerClock(){
  
  const t = new Date ();

  const m = t.getMinutes();

  const h = t.getHours()  % 12 + m / 60;

  const s = t.getSeconds();


  // winkel 
  const mw = m * 6;
  const sw = s * 6;
  const hw = h * 30;

  el('#seconds').setAttribute('transform',`rotate(${sw},50,50)`)
  el('#minutes').setAttribute('transform',`rotate(${mw},50,50)`)
  el('#hours').setAttribute('transform',`rotate(${hw},50,50)`)

  setTimeout(triggerClock,1000);

  console.log(h);
}