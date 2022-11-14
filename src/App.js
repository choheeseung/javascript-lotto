const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    this.createLotto();
  }

  createLotto() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.printLotto(randomNumbers);
  }

  printLotto(numbers) {
    numbers.sort((a, b) => { return a - b });
    MissionUtils.Console.print(`[${numbers.join(", ")}]`);
    console.log(`[${numbers.join(", ")}]`);
  }
}

const app = new App();
app.play();

module.exports = App;
