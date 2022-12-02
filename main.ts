input.onButtonPressed(Button.A, function () {
    basic.showString("Contrasenya=")
    // Quantes vegades vols que es repeteixi?
    for (let index = 0; index < 8; index++) {
        caracter = randint(1, 3)
        if (caracter == 1) {
            numero = randint(0, 9)
            basic.showNumber(numero)
        } else if (caracter == 2) {
            // Fins quin número necessites?
            lletra = randint(1, 0)
            // Cada lletra és igual a....?
            if (lletra == 0) {
                basic.showString("A")
            } else if (lletra == 0) {
                basic.showString("B")
            } else if (lletra == 0) {
                basic.showString("C")
            } else if (lletra == 0) {
                basic.showString("D")
            } else if (lletra == 0) {
                basic.showString("E")
            } else if (lletra == 0) {
                basic.showString("F")
            } else if (lletra == 0) {
                basic.showString("G")
            } else if (lletra == 0) {
                basic.showString("H")
            } else if (lletra == 0) {
                basic.showString("I")
            } else if (lletra == 0) {
                basic.showString("J")
            } else if (lletra == 0) {
                basic.showString("K")
            } else if (lletra == 0) {
                basic.showString("L")
            } else if (lletra == 0) {
                basic.showString("M")
            } else if (lletra == 0) {
                basic.showString("N")
            } else if (lletra == 0) {
                basic.showString("O")
            } else if (lletra == 0) {
                basic.showString("P")
            } else if (lletra == 0) {
                basic.showString("Q")
            } else if (lletra == 0) {
                // Quines lletres de l'abecedari et falten?
                basic.showString("R")
            } else {
                basic.showString("Z")
            }
        } else {
            // Entre quins dos números aleatoris vols que esculli?
            simbol = 0
            if (simbol == 1) {
                basic.showString("*")
            } else if (simbol == 2) {
                basic.showString("-")
            } else if (simbol == 3) {
                basic.showString("?")
            } else if (simbol == 4) {
                basic.showString("+")
            } else {
                basic.showString(">")
            }
        }
        basic.pause(1000)
    }
    basic.clearScreen()
})
let simbol = 0
let lletra = 0
let numero = 0
let caracter = 0
caracter = 0
numero = 0
lletra = 0
simbol = 0
