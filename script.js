console.log("működik");

function koszon() {
    let nev = document.getElementById("nev").value;
    let kor = document.getElementById("kor").value;
    let kiir = document.getElementById("ide");

    if (kor < 18) {
        kiir.innerHTML = "Szia" + nev +" !"
    }
    else {
        kiir.innerHTML = "Jó napot " + nev+ " !"
    }

    console.log(nev, kor);
}