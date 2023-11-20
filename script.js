//Pirma užduotis
var kaina
while (isNaN(parseFloat(kaina))){

kaina = prompt('Kokia prekės kaina su PVM?')
}
var prekesKainaSuPVM = parseFloat(kaina)
var prekesKainaSuPVMFormated = 'Prekės kaina su PVM: ' + prekesKainaSuPVM.toFixed(2) + ' €'
document.write(prekesKainaSuPVMFormated + '<br/>')
var PVM = (prekesKainaSuPVM * (0.21 / (1+ 0.21)))
var PVMFormated = ('PVM: ' + PVM.toFixed(2) + ' €')
document.write(PVMFormated + '<br/>')
var prekesKainaBePVM = (prekesKainaSuPVM - PVM)
var prekesKainaBePVMFormated = ('Prekės kaina be PVM: ' + prekesKainaBePVM.toFixed(2) + ' €')
document.write(prekesKainaBePVMFormated)

// Antra užduotis
var prekesKaina;

while (isNaN(parseFloat(prekesKaina))) {
    prekesKaina = prompt('Įveskite prekės kainą');
}

prekesKaina = parseFloat(prekesKaina);  // Convert to a number

const pristatymas = confirm('Ar reikalingas pristatymas į namus? (taip/ne)');

if (pristatymas) {
    var miestas = prompt('Į kurį miestą pristatyti?');
    miestas = miestas.toLowerCase();  // Convert the city name to lowercase
    console.log('Miestas:', miestas);

    var pristatymoKaina = 20;

    if (!isNaN(prekesKaina)) {
        if (prekesKaina >= 50 || miestas === 'vilnius') {
            console.log('Pristatymas nemokamas');
            document.write('Prekės kaina: ' + prekesKaina.toFixed(2) + ' €' + '<br/>');
            document.write('Prekę nemokamai pristatysime į ' + miestas + ' per 1-3 dienas.');
        } else {
            console.log('Pristatymas su kaina');
            var isvisoKaina = prekesKaina + pristatymoKaina;
            document.write('Prekės kaina: ' + prekesKaina.toFixed(2) + ' €' + '<br/>');
            document.write('Pristatymas: ' + pristatymoKaina.toFixed(2) + ' €' + '<br/>');
            document.write('Iš viso: ' + isvisoKaina.toFixed(2) + ' €' + '<br/>');
            document.write('Prekę pristatysime į ' + miestas + ' per 1-3 dienas.');
        }
    } else {
        console.log('Neteisinga prekės kaina');
        document.write('Neteisinga prekės kaina.');
    }
} else {
    console.log('Pristatymas nereikalingas');
    document.write('Prekės kaina: ' + prekesKaina.toFixed(2) + ' €' + '<br/>');
    document.write('Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a');
}
