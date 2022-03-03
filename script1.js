console.log("működik");

function jegy() {
    let nev = document.getElementById("nev").value;
    let jegy = document.getElementById("jegy").value;
    let kiir = document.getElementById("ide");

    if (jegy == 1) {
        kiir.innerHTML = "Megbuktál " +nev +" !";
    }
    else {
        kiir.innerHTML = "Átmentél "+ nev +" !";
    }

    console.log(nev, jegy);

}