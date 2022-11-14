const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    this.inputMyNumbers();
    this.createLotto();
  }

  createLotto() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.printLotto(randomNumbers);
  }

  printLotto(numbers) {
    numbers.sort((a, b) => { return a - b });
    MissionUtils.Console.print(`[${numbers.join(", ")}]`);
  }

  inputMyNumbers() {
    MissionUtils.Console.readLine("", (answer) => {
      if (answer % 1000 !== 0)
        throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    });
  }
}

const app = new App();
app.play();

module.exports = App;
