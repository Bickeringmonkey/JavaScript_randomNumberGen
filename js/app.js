const userLow = prompt(`please Choose a low number`);
const userHigh = prompt(`Please Choose a high number`);

const lowNum = parseInt(userLow);
const highNum = parseInt(userHigh);
const main = document.querySelector('main');

if (userLow && userHigh) {
  const ranNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
  main.innerHTML = `Your randomly generated number from between ${userLow} and ${userHigh} is ... ${ranNum}.`;
} else {
  main.innerHTML = `Sorry you must choose two numbers, please try again`;
}
