const Gpio = require('onoff').Gpio;
const led = new Gpio(24, 'out');

function blinkLED() {
  if (led.readSync() === 0) {
    led.writeSync(1);
  } else {
    led.writeSync(0);
  }
}

setInterval(blinkLED, 500);

process.on('SIGINT', () => {
  clearInterval();
  led.writeSync(0);
  led.unexport();
  console.log('LED stopped blinking and the program exited');
  process.exit(0);
});
