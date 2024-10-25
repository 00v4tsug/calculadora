var conteiner=""
var conjunto=""
var display = document.getElementById("display")
    display.innerHTML = "0"

function add(caracter){
    var displayval = document.getElementById("display").innerText
    if ((caracter == "0") && (conjunto == "0")) {
        conjunto = "0"
    }
    else if ((isNaN(parseFloat(caracter))) && (displayval == "0")) {
        conjunto = "0" + caracter
    }
    else if ((isNaN(parseFloat(conjunto.slice(-1)))) && (conjunto.slice(-1) == caracter)) {

    }
    else if ((conjunto == "NaN")) {
        conjunto = caracter
    }
    else if ((displayval == "") && (caracter == ".")) {
        conjunto = "0" + caracter
    }
    else if (displayval.length > 9) {

    }
    else {
        conjunto += caracter
    }
    display.innerHTML=conjunto
}

function limpar(){
    conjunto = ""
    display.innerHTML = "0"
}

function del(){
    conjunto = conjunto.slice(0, -1)
    display.innerHTML = conjunto
}

function cal(){
    conjunto = eval(conjunto)
    conjunto = conjunto.toString()
    display.innerHTML = conjunto
}
