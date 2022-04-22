function userName() {
    var name = prompt("What is your name?")
    return name
}

function askTemp(a) {
    var temp = prompt(`Hi, ${a}! Here, you can change celcius to fahrenheit or vice versa. \n\nWhat temperature to you want to convert? (numerical values only)`);
    return temp
}

function fahrenheitCelcius(a) {
    var fToC = (((a - 32) * 5) / 9)
    return fToC
}

function celciusFahrenheit(a) {
    var cToF = (((a * 9) / 5) + 32)
    return cToF
}

function askCon() {
    var conUnit = prompt("To convert fahrenheit to celcius, press f. to convert celcius to fahrenheit, press c.")
    return conUnit
}

function conNow(b, conv) {
    if (conv == "c") {
        var h = celciusFahrenheit(b);
        alert(`Okay, ${b} in celcius is ${h}`)
    }else if (conv == "f"){
        var h = fahrenheitCelcius(b);
        alert(`Okay, ${b} in fahrenheit is ${h}`)
    }else {
        alert ("Nothing Detected")
    }
    
}

conNow(askTemp(userName()), askCon())