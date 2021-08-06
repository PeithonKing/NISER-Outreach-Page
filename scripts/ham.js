function makeCross() {
    //console.log("Triggered")
    let top = document.getElementById("top");
    let mid = document.getElementById("mid");
    let bot = document.getElementById("bot");
    //console.log("opacity =", mid.style.opacity)
    //console.log("top transform =", top.style.transform)

    if (top.style.transform == "translateY(11px) rotate(225deg)") {
        top.style.transform = "translateY(0px) rotate(0deg)";
        top.style.backgroundColor = "#000066";
        mid.style.transform = "translateX(0px)";
        mid.style.opacity = "1";
        bot.style.transform = "translateY(0px) rotate(0deg)"
        bot.style.backgroundColor = "#000066";
    }
    else {
        top.style.transform = "translateY(11px) rotate(225deg)";
        top.style.backgroundColor = "#ff0000";
        mid.style.transform = "translateX(-200px)";
        mid.style.opacity = "0";
        bot.style.transform = "translateY(-11px) rotate(-225deg)"
        bot.style.backgroundColor = "#ff0000";
    }
}