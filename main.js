function calculateSleepsTilXmas() {
    const today = new Date();
    const thisYear = today.getFullYear();
    const nextChrismasYear = (today.getMonth() !== 11 || today.getDate() <= 25) ? thisYear : thisYear + 1;
    const timeDiff = new Date("12/25/" + nextChrismasYear).getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
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

function loadGalleries() {
    for (const gallery of document.getElementsByClassName("gallery")) {
        for (let i = 1; i <= gallery.attributes["x-gallery-size"].value; i++) {
            gallery.append(createImg(gallery, i));
        }
    }
}

function createImg(gallery, i) {
    let img = document.createElement("img");
    img.src = `img/${gallery.attributes["x-gallery-id"].value}/${i}.jpg`;
    img.onclick = (e) => window.open(e.target.src, "_blank")
    return img;
}

loadGalleries();

refreshSleepsTilXmas()