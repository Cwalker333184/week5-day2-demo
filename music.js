function musicChecker() {
    let music;
music = prompt("What's your all-time favorite song?");
musicParagraph.innerHTML = `Great choice! ${music} is a fantastic track!`;
}
musicButton.onclick = musicChecker;