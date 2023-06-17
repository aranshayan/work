document.addEventListener('DOMContentLoaded', () => {

  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 1) + 1;

  var flipdown = new FlipDown(twoDaysFromNow)

    .start()

    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  }, 5000);

});
