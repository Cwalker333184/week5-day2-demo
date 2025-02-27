function superPowerChecker() {
    let superPower;
superPower = prompt("If you could have any superpower, what would it be?");
superPowerParagraph.innerHTML = `Wow! Having ${superPower} would be incredible!`;
}
superPowerButton.onclick = superPowerChecker;