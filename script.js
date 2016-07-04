/**
 * Created by fra on 03/07/16.
 */

function sceltaComputer() {
    var pc = Math.random();
    if (pc <= 1 / 3) {
        return "sasso";
    } else if (pc < 2 / 3) {
        return "forbice";
    } else {
        return "carta";
    }
}

function selezioneForma(sceltaUtente) {
    
    var scelta = sceltaUtente.target.id,
        risultato = $(".risultato h2"),
        computer = sceltaComputer();

    function playing(scelta, computer) {

        $('.img_scelta__computer').attr('src', "image/" + computer + ".jpg");
        var txtVittoria = "Vittoria!! " + scelta + " batte " + computer,
            txtSconfitta = "Hai perso mi dispiace!! " + scelta + " perde contro " + computer;

        if (scelta === computer) {
            var txt = "PAREGGIO!";
            risultato.html(txt);
        } else if (scelta === "sasso") {
            if (computer === "forbice") {
                risultato.html(txtVittoria);
            } else {
                risultato.html(txtSconfitta);
            }
        } else if (scelta === "carta") {
            if (computer === "sasso") {
                risultato.html(txtVittoria);
            } else {
                risultato.html(txtSconfitta);
            }
        } else if (scelta === "forbice") {
            if (computer === "sasso") {
                risultato.html(txtSconfitta);
            } else {
                console.log(computer);
            }
        }
    }
    playing(scelta, computer);
}

