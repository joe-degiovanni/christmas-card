function calculateSleepsTilXmas() {
    const today = new Date();
    const thisYear = today.getFullYear();
    const nextChrismasYear = (today.getMonth() !== 11 || today.getDate() <= 25) ? thisYear :  thisYear + 1;
    const timeDiff = new Date("12/25/"+nextChrismasYear).getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000*3600*24));
}

function updateSleepsTilXmas(sleepsUntilXmas) {
    let numbers = String(sleepsUntilXmas).split("").map(digit => {
        let span = document.createElement("span");
        span.className = "number"
        span.innerText = digit;
        return span;
    });

    const countdown = document.getElementById("xmas-count-down")
    countdown.innerHTML = "";
    numbers.forEach(ele => {
        countdown.append(ele)
        countdown.append(document.createTextNode(" "))
    })
    
    let text = document.createElement("div");
    text.innerText = "Sleeps until Christmas";
    text.className = "countdown-text"
    
    countdown.append(text);
}

function refreshSleepsTilXmas() {
    let sleepsTilXmas = calculateSleepsTilXmas()
    updateSleepsTilXmas(sleepsTilXmas)
}

function makeImgsClickable() {
    const imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = (e) => openInNewTab(e.target.src)
    }
}

function openInNewTab(url) {
    window.open(url, "_blank")
}


makeImgsClickable();

refreshSleepsTilXmas()