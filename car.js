function carChecker() {
    let car;
car = prompt("If you could drive any car, what would it be?");
carParagraph.innerHTML = `A ${car} would be an amazing ride!`;
}
carButton.onclick = carChecker;