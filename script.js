function playSound(event) {
  const audio = this.document.querySelector(`audio[data-key=${event.code}]`);
  const key = this.document.querySelector(`.key[data-key=${event.code}]`);
  if (!audio) return
  else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };
}

function removeTransistion(event) {
  if (event.propertyName == 'transform') {
    this.classList.remove('playing');
  };
}

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('transitionend', removeTransistion));

window.addEventListener('keypress', playSound);

