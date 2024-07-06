var counter = 0;
var totalSlides = 3;
const buttons = document.querySelector('#buttons');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const imgSXS = document.querySelector('#img-s-xs');
const imgM = document.querySelector('#img-m');
const imgL = document.querySelector('#img-l');
const imgXL = document.querySelector('#img-xl');
const imgXXL = document.querySelector('#img-xxl');

const title = document.querySelector('#title');
const desc = document.querySelector('#desc');

button1.addEventListener('click', slide1);
button2.addEventListener('click', slide2);
button3.addEventListener('click', slide3);

function slide1() {
  title.textContent = 'Slide 1';

  desc.textContent = 'A pixel art depiction of an aloe vera plant. The plant features thick, fleshy green leaves with jagged edges, arranged in a rosette pattern. The background is simple, ensuring the focus remains on the aloe vera. The pixel art style gives the image a retro, blocky appearance.';

  imgSXS.src = './imgs/aloeveratest-s-xs.png';
  imgM.src = './imgs/aloeveratest-m.png';
  imgL.src = './imgs/aloeveratest-l.png';
  imgXL.src = './imgs/aloeveratest-xl.png';
  imgXXL.src = './imgs/aloeveratest-xxl.png';

  button1.src = './imgs/circle1.png'
  button2.src = './imgs/circle0.png'
  button3.src = './imgs/circle0.png'
}

function slide2() {
  title.textContent = 'Slide 2';

  desc.textContent = 'A pixel art depiction of an aloe vera plant with inverted colors. The typically green, fleshy leaves appear in shades of purple or pink, with their jagged edges highlighted in contrasting tones. The background, also inverted, adds an otherworldly feel, emphasizing the surreal, retro, blocky appearance of the inverted pixel art.';

  imgSXS.src = './imgs/aloeveratestinv-s-xs.png';
  imgM.src = './imgs/aloeveratestinv-m.png';
  imgL.src = './imgs/aloeveratestinv-l.png';
  imgXL.src = './imgs/aloeveratestinv-xl.png';
  imgXXL.src = './imgs/aloeveratestinv-xxl.png';

  button1.src = './imgs/circle0.png'
  button2.src = './imgs/circle1.png'
  button3.src = './imgs/circle0.png'
}


function slide3() {
  title.textContent = 'Slide 3';

  desc.textContent = 'A pixel art depiction of an aloe vera plant in black and white. The plant \'s thick, fleshy leaves with jagged edges are rendered in various shades of gray, creating a monochromatic, retro look. The simplistic background ensures the focus remains on the aloe vera, highlighting its distinct shape and texture despite the lack of color.';

  imgSXS.src = './imgs/aloeveratestbw-s-xs.png';
  imgM.src = './imgs/aloeveratestbw-m.png';
  imgL.src = './imgs/aloeveratestbw-l.png';
  imgXL.src = './imgs/aloeveratestbw-xl.png';
  imgXXL.src = './imgs/aloeveratestbw-xxl.png';

  button1.src = './imgs/circle0.png'
  button2.src = './imgs/circle0.png'
  button3.src = './imgs/circle1.png'
}

