function rekenCijfer() {
    var cijfer = document.getElementById('input1').value;

    if (cijfer >= 0 && cijfer < 50) {
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + cijfer + " en is dus onvoldoende" + '<br>';
    } else if (cijfer >= 50 && cijfer < 60) {
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + cijfer + " en is dus matig" + '<br>';
    } else if (cijfer >= 60 && cijfer < 75) {
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + cijfer + " en is dus voldoende" + '<br>';
    } else if (cijfer >= 75 && cijfer <= 100) {
        document.getElementById('resultaat').innerHTML += "Het cijfer is: " + cijfer + " en is dus goed" + '<br>';
    } else {
        document.getElementById('resultaat').innerHTML += cijfer + " is ongeldig, geef resultaat tussen 0 en 100" + '<br>';
    }
}
